import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

const GPTSearch = (props) => {
  return (
    <div>
      <h1>You can try our search engine</h1>
      <form onSubmit={props.onSubmitSearch}>
        <InputGroup >
          <InputGroup.Text >Just let us know something about your receiptant, <br />
            e.g age, gender, hobbies, your budget range, etc.</InputGroup.Text>
          <Form.Control as="textarea" aria-label="with textarea" name='searchOption'
            value={props.state.gptRequest}
            onChange={props.setGPTRequest} />
          <Button as="button" variant="primary" type="submit"> Try it! </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default GPTSearch;