import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

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
    const events = this.props.events.results.event;

    return (
      <Fragment>
        <h1>{this.props.events.displayName}: Next events</h1>
        {events.map(event => {
          return (
            <div className="item">
              <h2>{event.displayName}</h2>
              <p>{event.start.date}</p>
              <p>{event.location.city}</p>
              <p>{event.venue.displayName}</p>
              <button type="button">More details</button>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Events);
