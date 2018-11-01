import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { changePage, goBack } from '../helpers';

// import Header from './Header';
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
        {/* <Header /> */}
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
          {/* <Search /> */}
          <Route exact path="/" component={Search} />
          {/* {this.props.searchResults ? <SearchResults /> : null} */}
          <Route exact path="/search-results" component={SearchResults} />
          {/* {this.props.events ? <Events /> : null} */}
          <Route exact path="/events" component={Events} />
          {/* {this.props.eventDetails ? <EventDetails /> : null} */}
          <Route exact path="/event-details" component={EventDetails} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
