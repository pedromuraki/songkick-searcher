import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { changePage } from '../helpers/index';

import { search } from '../actions/search';
import { clearResults } from '../actions/clearResults';

// const mapStateToProps = state => {
//   return {
//     propName: state.prop
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    search: (by, query) => dispatch(search(by, query)),
    clearResults: () => dispatch(clearResults())
  };
};

class SearchArtists extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearResults();
    changePage('/search-results');
    this.props.search('artists', this.state.inputValue);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div className="search-artists">
        <h1>Find events from your favorite artist</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type your favorite artist"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchArtists);
