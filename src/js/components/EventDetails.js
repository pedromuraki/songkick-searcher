import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Loading from './Loading';

const mapStateToProps = state => {
  return {
    eventDetails: state.eventDetails
  };
};

class EventDetails extends Component {
  constructor(props) {
    super(props);
  }

  getLineUp() {
    const performance = this.props.eventDetails.results.event.performance;

    return performance.map((artist, i) => {
      return i === performance.length - 1
        ? artist.displayName
        : artist.displayName + ', ';
    });
  }

  render() {
    if (!this.props.eventDetails) {
      return <Loading />;
    }

    const event = this.props.eventDetails.results.event;

    return (
      <div className="item">
        <h2>{event.displayName}</h2>
        <p>
          <strong>{event.location.city}</strong>
        </p>
        <p>
          <strong>{event.venue.displayName}</strong>
        </p>
        <p>
          <strong>Address:</strong> {event.venue.street}
        </p>
        <p>
          <strong>Date:</strong> {event.start.date}
        </p>
        {event.start.time ? (
          <p>
            <strong>Starts at:</strong> {event.start.time}
          </p>
        ) : null}
        <p>
          <strong>Line up:</strong> {this.getLineUp()}
        </p>
        <a href={event.uri} target="_blank" className="button-small">
          Find tickets
        </a>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EventDetails);
