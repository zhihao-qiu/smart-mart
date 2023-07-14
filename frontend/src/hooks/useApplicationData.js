import { useReducer, useEffect } from 'react';
import reducer from '../reducer/reducer';
import axios from 'axios';
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME, GPT_API_KEY } from '../env';

const initialState = {
  algoliaRequest: '',
  askQuestions: '',
  gptRequest: '',
  algoliaResponse: null,
  gptResponse: null,
  answerIndex: 0,
  showText: 'What are you looking for today?',
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state.answerIndex);
    if (state.answerIndex == 5) {
      submitSearch();
    }
  }, [state.answerIndex]);

  const setAskQuestions = (event) => {
    dispatch({ type: 'ASK_QUESTIONS', payload: event.target.value });
  };

  const onClickReset = () => {
    dispatch({ type: 'ASK_QUESTIONS', payload: '' });
    dispatch({ type: 'SET_ANSWER_INDEX', payload: 0 });
    dispatch({ type: 'SET_ALGOLIA_REQUEST', payload: '' });
    dispatch({ type: 'SET_GPT_REQUEST', payload: '' });
    dispatch({ type: 'SET_ALGOLIA_RESPONSE', payload: null });
    dispatch({ type: 'SET_GPT_RESPONSE', payload: null });
    dispatch({ type: 'SET_SHOW_TEXT', payload: 'What are you looking for today?' });
  };

  const onSubmitSearch = async (event) => {
    event.preventDefault();

    // if nothing input, no need to proceed
    if (!state.askQuestions) return;

    dispatch({ type: 'SET_GPT_REQUEST', payload: state.askQuestions });
    dispatch({ type: 'ASK_QUESTIONS', payload: '' });
    dispatch({ type: 'SET_ANSWER_INDEX' });

    // keeping collecting answers
    if (state.answerIndex < 4) {
      switch (state.answerIndex) {
        case 0:
          dispatch({ type: 'SET_SHOW_TEXT', payload: 'Who are you purchasing a gift for?' });
          break;
        case 1:
          dispatch({ type: 'SET_SHOW_TEXT', payload: 'What are the interests or hobbies of the people?' });
          break;
        case 2:
          dispatch({ type: 'SET_SHOW_TEXT', payload: 'Any other information can you share?' });
          break;
        case 3:
          dispatch({ type: 'SET_SHOW_TEXT', payload: 'What is your price range?' });
          break;
      }
    }

  };

  const submitSearch = async () => {
    dispatch({ type: 'SET_SHOW_TEXT', payload: 'Loading...' });
    console.log('after:', state.answerIndex);
    console.log(state.gptRequest);
    // sending request to gpt
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: GPT_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    console.log(state.gptRequest);

    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: state.gptRequest }],
    });

    const result = chat_completion.data.choices[0].message?.content;
    dispatch({ type: 'SET_GPT_RESPONSE', payload: result });
    dispatch({ type: 'SET_SHOW_TEXT', payload: 'I think...' });
    console.log(result);

    const chat_completion_keywords = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: result + "Can you pick out all the keywords, and put them in an array?" }],
    });

    const result_keywords = chat_completion_keywords.data.choices[0].message?.content;
    console.log(result_keywords);

    const regex = /[\w\s]+/g;
    const exacted_keywords = result_keywords.match(regex);
    console.log(exacted_keywords);

    dispatch({ type: 'SET_ALGOLIA_REQUEST', payload: exacted_keywords });

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
        dispatch({ type: 'SET_SHOW_TEXT', payload: error.messasge });
        // response.status(500).json({ error: "Internal server error" });
      });

    dispatch({ type: 'SET_ANSWER_INDEX' });
  };

  return {
    state,
    setAskQuestions,
    onSubmitSearch,
    onClickReset,
  };
}