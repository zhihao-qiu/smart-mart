import { useReducer, useEffect } from 'react';
import reducer from '../reducer/reducer';
import axios from 'axios';
import algoliasearch from 'algoliasearch';

const initialState = {
  algoliaRequest: '',
  algoliaResponse: null,
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAlgoliaRequest = (event) => {
    dispatch({ type: 'SET_ALGOLIA_REQUEST', payload: event.target.value });
  };

  const onSubmitAlgoliaSearch = async (event) => {
    event.preventDefault();
    // const requestOptions= {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ algolia_search: state.algoliaRequest })
    // }
    const ALGOLIA_APP_ID = "IA3FBCMVMY";
    const ALGOLIA_API_KEY = "5f55d0fc24e0af71460bcbe84cd7307d";
    const ALGOLIA_INDEX_NAME = "demo_algolia";


    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_NAME);

    const algoliaSearchOption = state.algoliaRequest;

    index
      .search(algoliaSearchOption)
      .then(results => {
        // console.log(results);
        dispatch({ type: 'SET_ALGOLIA_RESPONSE', payload: results });
        console.log(state.algoliaResponse);

      })
      .catch(error => {
        console.error(error);
        response.status(500).json({ error: "Internal server error" });
      });
  };
  return {
    state,
    setAlgoliaRequest,
    onSubmitAlgoliaSearch,
  };
}