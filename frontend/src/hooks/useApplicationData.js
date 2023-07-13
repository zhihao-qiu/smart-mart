import { useReducer, useEffect } from 'react';
import reducer from '../reducer/reducer';
import axios from 'axios';
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME, GPT_API_KEY } from '../env';

const initialState = {
  algoliaRequest: '',
  gptRequest: '',
  algoliaResponse: null,
  gptResponse: null,
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGPTRequest = (event) => {
    dispatch({ type: 'SET_GPT_REQUEST', payload: event.target.value });
  };

  const onSubmitSearch = async (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_GPT_RESPONSE', payload: null });
    dispatch({ type: 'SET_ALGOLIA_REQUEST', payload: '' });
    dispatch({ type: 'SET_ALGOLIA_RESPONSE', payload: null });
    if (!state.gptRequest) return

    const searchOption = state.gptRequest + "Please reply me with the format as 1.[category name]: description 2.[category name]:description";

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: GPT_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: searchOption }],
    });

    const result = chat_completion.data.choices[0].message?.content;
    dispatch({ type: 'SET_GPT_RESPONSE', payload: result });
    console.log(result);

    const regex = /^\d+\.\s(.+?):/gm;
    const categories = [];

    let match;
    while ((match = regex.exec(result))) {
      // const categoryNumber = match[1];
      const categoryName = match[1].trim();
      categories.push(categoryName);
    }

    console.log(categories);
    dispatch({ type: 'SET_ALGOLIA_REQUEST', payload: categories.join(',') });

    // retrive data from algolia
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_NAME);

    index
      .search(state.algoliaRequest)
      .then(results => {
        // console.log(results);
        dispatch({ type: 'SET_ALGOLIA_RESPONSE', payload: results });

      })
      .catch(error => {
        console.error(error.message);
        // response.status(500).json({ error: "Internal server error" });
      });
  };
  return {
    state,
    setGPTRequest,
    onSubmitSearch,
  };
}