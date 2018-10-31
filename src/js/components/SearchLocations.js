import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

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

class SearchLocations extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: ''
    };
  }

  componentDidMount() {
    axios.get('http://ip-api.com/json').then(data => {
      this.setState({ inputValue: data.data.city });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearResults();
    changePage('/search-results');
    this.props.search('locations', this.state.inputValue);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div className="search-locations">
        <h1>Find events near</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type your city"
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
)(SearchLocations);
