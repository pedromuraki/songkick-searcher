import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { changePage, goBack } from '../helpers';

import Search from './Search';
import SearchResults from './SearchResults';
import Events from './Events';
import EventDetails from './EventDetails';
import Footer from './Footer';

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    events: state.events,
    eventDetails: state.eventDetails
  };
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="nav-buttons">
          <button
            type="button"
            onClick={() => {
              changePage('/');
            }}
          >
            New search
          </button>
          <button
            type="button"
            onClick={() => {
              goBack();
            }}
          >
            {'< '}
            Back
          </button>
        </div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search-results" component={SearchResults} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/event-details" component={EventDetails} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
