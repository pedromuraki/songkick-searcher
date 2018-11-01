import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Loading from './Loading';

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
    if (!this.props.eventDetails) {
      return <Loading />;
    }

    const event = this.props.eventDetails.results.event;

    return (
      <div className="item">
        <h2>{event.displayName}</h2>
        <p>{event.location.city}</p>
        <p>
          {event.venue.displayName} - {event.venue.street}
        </p>
        <p>
          {event.start.date} - {event.start.time}
        </p>
        <a href={event.uri} target="_blank" className="button-small">
          Find tickets
        </a>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EventDetails);
