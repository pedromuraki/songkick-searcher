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

class EventDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>Event name</h1>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <a href="" target="_blank">
          Find tickets
        </a>
      </Fragment>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EventDetails);

export default EventDetails;
