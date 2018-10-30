import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     propName: param => {
//       dispatch(propName(param));
//     }
//   };
// };

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  getResultsMarkup() {
    const results = this.props.searchResults.searchResults.results;

    if (results.artist) {
      return results.artist.map(artist => {
        return (
          <div className="item" key={artist.id}>
            <h2>{artist.displayName}</h2>
            <button type="button">See events</button>
          </div>
        );
      });
    }

    return results.location.map(location => {
      return (
        <div className="item" key={location.metroArea.id}>
          <h2>{location.city.displayName}</h2>
          <p>
            {location.metroArea.displayName} -{' '}
            {location.city.country.displayName}
          </p>
          <button type="button">See events</button>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Search results for: search query</h1>
        {this.getResultsMarkup()}
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(SearchResults);

// export default SearchResults;
