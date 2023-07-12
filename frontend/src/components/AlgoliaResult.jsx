import React from 'react';
import ReactJson from 'react-json-view';
import Product from './Product';
import { ListGroup } from 'react-bootstrap';
import '../css/AlgoliaResult.css'

const AlgoliaResult = (props) => {
  const results = props.state.algoliaResponse;

  const renderProducts = () => {
    if (!results) {
      return <p>Loading...</p>;
    }

    // Split the results array into subarrays of size 2
    const rows = [];
    for (let i = 0; i < results.length; i += 2) {
      const row = results.slice(i, i + 2);
      rows.push(row);
    }

    // Render each row of products
    return rows.map((row, rowIndex) => (
      <ListGroup horizontal className="my-2" key={rowIndex}>
        {row.map((product, index) => (
          <ListGroup.Item key={index} className='product-item'>
            <Product product={product} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    ));
  };

  return (
    <div>
      <h1>You might be interested in these products</h1>
      {renderProducts()}
    </div>
  );
};

export default AlgoliaResult;