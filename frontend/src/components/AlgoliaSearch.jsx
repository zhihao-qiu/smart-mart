import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

const AlgoliaSearch = (props) => {
  return (
    <div>
      <h1>You can try our search engine</h1>
      <form onSubmit={props.onSubmitAlgoliaSearch}>
        <InputGroup >
          <InputGroup.Text >Just let us know something about your receiptant, <br />
            e.g age, gender, hobbies, your budget range, etc.</InputGroup.Text>
          <Form.Control as="textarea" aria-label="with textarea" name='algoliaSearchOption'
            value={props.state.algoliaRequest}
            onChange={props.setAlgoliaRequest} />
          <Button as="button" variant="primary" type="submit"> Try it! </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default AlgoliaSearch;