import React from 'react';

const AlgoliaSearch = (props) => {
  return (
    <div>
      <h1>You can try our search engine</h1>
      <h3>Just let us know something about your receiptant, eg age, gender, hobbies, your budget range, etc.</h3>
      <form onSubmit={props.onSubmitAlgoliaSearch}>
        <textarea name="algoliaSearchOption"
          value={props.state.algoliaRequest}
          onChange={props.setAlgoliaRequest}
        />
        <input type="submit" name="submit" value="Try it!" />
      </form>
    </div>
  );
};

export default AlgoliaSearch;