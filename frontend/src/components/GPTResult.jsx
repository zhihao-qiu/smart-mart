import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/AlgoliaResult.css';

const GPTResult = (props) => {
  const results = props.state.gptResponse;
  if (!results) {
    return (
      <Container>
        <Row>
          <Col>Loading...</Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col>{results}</Col>
      </Row>
      <Row>
        <Col>You might be interested in these products</Col>
      </Row>
    </Container>
  );

};

export default GPTResult;