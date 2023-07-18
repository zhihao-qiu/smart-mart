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
        algoliaResponse: action.payload,
      };
    case 'SET_GPT_RESPONSE':
      return {
        ...state,
        gptResponse: action.payload,
        gptRequest: '',
      };
    case 'SET_GPT_REQUEST':
      let requests;
      if (action.payload) {
        switch (state.answerIndex) {
          case 0:
            requests = state.gptRequest + "What are you looking for today?" + action.payload + '.';
            break;
          case 1:
            requests = state.gptRequest + "Who are you purchasing a gift for?" + action.payload + '.';
            break;
          case 2:
            requests = state.gptRequest + "What are the interests or hobbies of the people?" + action.payload + '.';
            break;
          case 3:
            requests = state.gptRequest + "Any information else about the receiptant you can share?" + action.payload + '.';
            break;
          case 4:
            requests = state.gptRequest + "What is your price range?" + action.payload + ". Some questions and answers have been collected. Please show me some suggestions for the gift based on the above information and please reply with the format as, category name: details as brands or products, no need to show the descriptive text.";
            break;
          default:
            requests = '';
        }
      }
      return {
        ...state,
        gptRequest: requests,
      };
    case 'ASK_QUESTIONS':
      return {
        ...state,
        askQuestions: action.payload,
      };
    case 'SET_ANSWER_INDEX':
      if (action.payload == 0) {
        return {
          ...state,
          answerIndex: 0,
        };
      }
      return {
        ...state,
        answerIndex: state.answerIndex + 1,
      };
    case 'SET_SHOW_TEXT':
      return {
        ...state,
        showText: action.payload,
      };
    default:
      return state;
  }
}