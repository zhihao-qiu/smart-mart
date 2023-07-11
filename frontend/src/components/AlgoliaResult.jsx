import React from 'react';
import ReactJson from 'react-json-view';
import Product from './Product'

const AlgoliaResult = (props) => {
  const results = props.state.algoliaResponse;

  return (
    <div>
      <h1>You might be interested in these products</h1>
      {results ? (
        <div>
          {results.map((result, index) => (
            <Product key={index} product={result} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AlgoliaResult;