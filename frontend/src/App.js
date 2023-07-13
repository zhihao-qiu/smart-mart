import 'App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GPTSearch from './components/GPTSearch';
import AlgoliaResult from './components/AlgoliaResult';
import GPTResult from './components/GPTResult';
import useApplicationData from 'hooks/useApplicationData';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

export default function App() {
  const {
    state,
    setGPTRequest,
    onSubmitSearch,
  } = useApplicationData();

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <GPTSearch
        state={state}
        setGPTRequest={setGPTRequest}
        onSubmitSearch={onSubmitSearch}
      />
      {state.gptResponse && <GPTResult state={state} />}
      {state.algoliaResponse && <AlgoliaResult state={state} />}

      <ProductList products={Products} />
      <ProductDetails />
    </div>
  );


}