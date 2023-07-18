import React from 'react';
import Product from './Product';
import { ListGroup } from 'react-bootstrap';
import '../css/AlgoliaResult.css'

const AlgoliaResult = (props) => {
  const results = props.state.algoliaResponse.hits;

  const renderProducts = () => {
    if (!results) {
      return <p>Loading...</p>;
    }

    return results.map((product, index) => (
    <div key={index} className='product-item'>
      <Product product={product} />
    </div>
    ))

  };

  return (
    <div>
      {props.state.algoliaRequest}
      {renderProducts()}
    </div>
  );
};

export default AlgoliaResult;