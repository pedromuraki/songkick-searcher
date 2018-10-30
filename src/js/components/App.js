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
    events: state.events
  };
};

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        {/* <Header /> */}
        <button type="button">New search</button>
        <Search />
        {this.props.searchResults ? <SearchResults /> : null}
        {this.props.events ? <Events /> : null}
        <EventDetails />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

// export default App;
