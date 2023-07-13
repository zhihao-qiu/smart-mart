import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/AlgoliaResult.css';

const GPTResult = (props) => {
  const results = props.state.gptResponse;
  if (!results) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        <Col>{results}</Col>
      </Row>
    </Container>
  );

};

export default GPTResult;