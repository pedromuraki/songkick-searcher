import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

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
      <div className="app-wrapper">
        {/* <Header /> */}
        <button type="button">New search</button>
        <button type="button">Back</button>
        <Search />
        {this.props.searchResults ? <SearchResults /> : null}
        {this.props.events ? <Events /> : null}
        {this.props.eventDetails ? <EventDetails /> : null}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
