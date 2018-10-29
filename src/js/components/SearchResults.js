import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   return {
//     propName: state.prop
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     propName: param => {
//       dispatch(propName(param));
//     }
//   };
// };

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>Search results for: search query</h1>
        <div className="item">
          <h2>Artist or city name</h2>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <button type="button">See events</button>
        </div>
        <div className="item">
          <h2>Artist or city name</h2>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <button type="button">See events</button>
        </div>
        <div className="item">
          <h2>Artist or city name</h2>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <button type="button">See events</button>
        </div>
      </Fragment>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SearchResults);

export default SearchResults;
