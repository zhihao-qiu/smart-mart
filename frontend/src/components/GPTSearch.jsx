import React from 'react';
import { InputGroup, Form, Button, Spinner } from 'react-bootstrap';
import '../css/GPTSearch.css';

const GPTSearch = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmitSearch}>
        <InputGroup >
          {props.state.showText == 'Loading...' &&
            <InputGroup.Text>
              <Spinner animation="border" size="md" variant="warning" />
            </InputGroup.Text>
          }
          <InputGroup.Text className="custom-text">{props.state.showText}
          </InputGroup.Text>

          <Form.Control as="textarea" aria-label="with textarea" name='searchOption'
            value={props.state.askQuestions}
            onChange={props.setAskQuestions} />
          <Button as="button" variant="primary" type="button" className="flex-none w-1/8 h-13 uppercase font-small tracking-wider bg-blue-500 text-white" onClick={props.onClickReset}> Reset </Button>
          <Button as="button" variant="success" type="submit" className="flex-none w-1/8 h-13 uppercase font-small tracking-wider bg-green-500 text-white"> Try it! </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default GPTSearch;