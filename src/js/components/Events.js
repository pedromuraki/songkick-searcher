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

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>Search query: Next events</h1>
        <div className="item">
          <h2>Event name</h2>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <button type="button">More details</button>
        </div>
        <div className="item">
          <h2>Event name</h2>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <button type="button">More details</button>
        </div>
        <div className="item">
          <h2>Event name</h2>
          <p>Some content</p>
          <p>Some content</p>
          <p>Some content</p>
          <button type="button">More details</button>
        </div>
      </Fragment>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Events);

export default Events;
