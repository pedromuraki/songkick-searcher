import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePage } from '../helpers/index';

import { search } from '../actions/search';
import { clearResults } from '../actions/clearResults';
import { changeSearchStatus } from '../actions/changeSearchStatus';

const mapDispatchToProps = dispatch => {
  return {
    search: (by, query) => dispatch(search(by, query)),
    clearResults: () => dispatch(clearResults()),
    changeSearchStatus: bool => dispatch(changeSearchStatus(bool))
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
    this.props.changeSearchStatus(true);
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
        <h1>Find concerts from your favorite artist</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type your favorite artist"
            onChange={this.handleChange}
            value={this.state.inputValue}
            className="input-text"
            required
          />
          <button type="submit" className="button-big">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchArtists);
