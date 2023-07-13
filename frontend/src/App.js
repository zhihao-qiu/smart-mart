import 'App.css';
import GPTSearch from './components/GPTSearch';
import AlgoliaResult from './components/AlgoliaResult';
import GPTResult from './components/GPTResult';
import useApplicationData from 'hooks/useApplicationData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const {
    state,
    setGPTRequest,
    onSubmitSearch,
  } = useApplicationData();

  return (
    <div className="App">
      <GPTSearch
        state={state}
        setGPTRequest={setGPTRequest}
        onSubmitSearch={onSubmitSearch}
      />

      {state.gptResponse && <GPTResult state={state} />}
      {state.algoliaResponse && <AlgoliaResult state={state} />}

    </div>
  );
}