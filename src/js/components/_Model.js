import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    propName: state.prop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    propName: param => {
      dispatch(propName(param));
    }
  };
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (  );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
