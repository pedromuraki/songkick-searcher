import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePage } from '../helpers/index';

const mapStateToProps = state => {
  return {
    searchStatus: state.searchStatus
  };
};

class Loading extends Component {
  componentDidMount() {
    if (!this.props.searchStatus) {
      changePage('/');
    }
  }

  render() {
    return <p>Loading..</p>;
  }
}

export default connect(mapStateToProps)(Loading);
