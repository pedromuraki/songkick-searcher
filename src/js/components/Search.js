import React, { Component, Fragment } from 'react';

import SearchArtists from './SearchArtists';
import SearchLocations from './SearchLocations';

const Search = () => {
  return (
    <Fragment>
      <SearchArtists />
      <SearchLocations />
    </Fragment>
  );
};

export default Search;
