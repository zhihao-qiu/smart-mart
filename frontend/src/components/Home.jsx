import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GPTSearch from './GPTSearch';
import GPTResult from './GPTResult';
import useApplicationData from '../hooks/useApplicationData';
import ProductList from './ProductList';


export default function Home(props) {
  const {Products} = props;

  const {
    state,
    setAskQuestions,
    onSubmitSearch,
    onClickReset,
  } = useApplicationData();


  return (
    <div className="App">
      {props.showSearch &&<GPTSearch
        state={state}
        setAskQuestions={setAskQuestions}
        onSubmitSearch={onSubmitSearch}
        onClickReset={onClickReset}
      />}
      {state.gptResponse && <GPTResult state={state} setProducts={props.setProducts} />}
      {/* {state.algoliaResponse && <AlgoliaResult state={state} />} */}

      {state.algoliaResponse && <ProductList
        products={state.algoliaResponse.hits}
        ProductData={props.ProductData}
        setProductData={props.setProductData}
        Cart={props.Cart}
        setCart={props.setCart} />}
      {/* <ProductList products={state.algoliaResponse.hits} /> */}
      {!state.algoliaResponse && <ProductList
        products={Products}
        ProductData={props.ProductData}
        setProductData={props.setProductData}
        Cart={props.Cart}
        setCart={props.setCart}
        faves={props.faves}
        setFaves={props.setFaves}
      />}
    </div>
  );


}