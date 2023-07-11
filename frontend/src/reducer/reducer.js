export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ALGOLIA_REQUEST':
      return {
        ...state,
        algoliaRequest: action.payload,
      };
    case 'SET_ALGOLIA_RESPONSE':
      return {
        ...state,
        algoliaResponse: action.payload.hits,
      };
    default:
      return state;
  }
}