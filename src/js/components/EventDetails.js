import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    eventDetails: state.eventDetails
  };
};

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
    const event = this.props.eventDetails.results.event;

    return (
      <Fragment>
        <h1>{event.displayName}</h1>
        <p>{event.location.city}</p>
        <p>
          {event.venue.displayName} - {event.venue.street}
        </p>
        <p>
          {event.start.date} - {event.start.time}
        </p>
        <a href={event.uri} target="_blank">
          Find tickets
        </a>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(EventDetails);
