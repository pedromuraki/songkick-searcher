import React, { Component, Fragment } from 'react';

// import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';
import Events from './Events';
import EventDetails from './EventDetails';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        {/* <Header /> */}
        <button type="button">New search</button>
        <Search />
        <SearchResults />
        <Events />
        <EventDetails />
        <Footer />
      </div>
    );
  }
}

export default App;
