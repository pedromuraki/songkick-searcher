import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Loading from './Loading';

import { changePage } from '../helpers/index';

import { getEvents } from '../actions/getEvents';
import { clearEvents } from '../actions/clearEvents';

import uuidv1 from 'uuid/v1';

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: (from, displayName, id) =>
      dispatch(getEvents(from, displayName, id)),
    clearEvents: () => dispatch(clearEvents())
  };
};

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(from, displayName, id) {
    this.props.clearEvents();
    changePage('/events');
    this.props.getEvents(from, displayName, id);
  }

  getResultsMarkup() {
    if (!this.props.searchResults) {
      return <Loading />;
    }

    if (this.props.searchResults.totalEntries === 0) {
      return <p>Nothing found.</p>;
    }

    const results = this.props.searchResults.results;

    if (results.artist) {
      return results.artist.map(artist => {
        return (
          <div className="item" key={uuidv1()}>
            <h2>{artist.displayName}</h2>
            <button
              type="button"
              onClick={() => {
                this.handleClick('artists', artist.displayName, artist.id);
              }}
              className="button-small"
            >
              See events
            </button>
          </div>
        );
      });
    }

    return results.location.map(location => {
      return (
        <div className="item" key={uuidv1()}>
          <h2>{location.city.displayName}</h2>
          <p>
            {location.metroArea.displayName} -{' '}
            {location.city.country.displayName}
          </p>
          <button
            type="button"
            onClick={() => {
              this.handleClick(
                'metro_areas',
                location.metroArea.displayName,
                location.metroArea.id
              );
            }}
            className="button-small"
          >
            See events nearby
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        {this.props.searchResults.activeQuery ? (
          <h1>Search results for: {this.props.searchResults.activeQuery}</h1>
        ) : null}
        {this.getResultsMarkup()}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
