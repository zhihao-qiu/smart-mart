import React from 'react';
import { Alert } from 'react-bootstrap';
import '../css/AlgoliaResult.css';

const GPTResult = (props) => {
  const results = props.state.gptResponse;
  if (!results) {
    return (
      <Alert key='info' variant='info'>
      Loading...
      </Alert>
    );
  }
  return (
    <Alert key='info' variant='info' className="formatted-alert" >
      {results}
      <br />You might be interested in these products.
    </Alert>
  );

};

export default GPTResult;