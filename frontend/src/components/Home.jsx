import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GPTSearch from './GPTSearch';
import GPTResult from './GPTResult';
import useApplicationData from '../hooks/useApplicationData';
import ProductList from './ProductList';


export default function Home(props) {
  const {
    state,
    setAskQuestions,
    onSubmitSearch,
    onClickReset,
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
       <GPTSearch
        state={state}
        setAskQuestions={setAskQuestions}
        onSubmitSearch={onSubmitSearch}
        onClickReset={onClickReset}
      />
      {state.gptResponse && <GPTResult state={state} />}
      {/* {state.algoliaResponse && <AlgoliaResult state={state} />} */}

      {state.algoliaResponse && <ProductList products={state.algoliaResponse.hits} />}
      {/* <ProductList products={state.algoliaResponse.hits} /> */}
      <ProductList 
        products={Products}
        ProductData={props.ProductData}
        setProductData={props.setProductData}
        Cart={props.Cart}
        setCart={props.setCart}
        />
    </div>
  );


}