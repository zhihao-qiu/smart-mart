import 'App.css';
import AlgoliaSearch from './components/AlgoliaSearch';
import AlgoliaResult from './components/AlgoliaResult';
import useApplicationData from 'hooks/useApplicationData';

export default function App() {
  const {
    state,
    setAlgoliaRequest,
    onSubmitAlgoliaSearch,
  } = useApplicationData();

  return (
    <div className="App">
      <AlgoliaSearch
        state={state}
        setAlgoliaRequest={setAlgoliaRequest}
        onSubmitAlgoliaSearch={onSubmitAlgoliaSearch}
      />
      {state.algoliaResponse && <AlgoliaResult state={state} />}

    </div>
  );
}