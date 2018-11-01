import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Loading from './Loading';

import { changePage } from '../helpers/index';

import { getEventDetails } from '../actions/getEventDetails';
import { clearEventDetails } from '../actions/clearEventDetails';

import uuidv1 from 'uuid/v1';

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventDetails: id => dispatch(getEventDetails(id)),
    clearEventDetails: () => dispatch(clearEventDetails())
  };
};

class Events extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.clearEventDetails();
    changePage('/event-details');
    this.props.getEventDetails(id);
  }

  render() {
    if (!this.props.events) {
      return <Loading />;
    }

    if (this.props.events.totalEntries === 0) {
      return <p>Nothing found.</p>;
    }

    const events = this.props.events.results.event;

    return (
      <Fragment>
        <h1>{this.props.events.displayName}: Upcoming events</h1>
        {events.map(event => {
          return (
            <div className="item" key={uuidv1()}>
              <h2>{event.displayName}</h2>
              <p>{event.start.date}</p>
              <p>{event.location.city}</p>
              <p>{event.venue.displayName}</p>
              <button
                type="button"
                onClick={() => {
                  this.handleClick(event.id);
                }}
                className="button-small"
              >
                More details
              </button>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
