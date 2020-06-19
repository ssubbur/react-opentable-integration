import React from 'react';
import { shallowEqual, useSelector } from 'react-redux'
import './App.css';
import Search from './search-restaurants/SearchForm';
import RestaurantList from './search-restaurants/RestaurantList';

function App() {
  const {isFetching, error } = useSelector(state => state.search, shallowEqual);
  return (
    <div className="container">
      <h2>Search Restaurants</h2>

      <Search />
      <hr />
      <RestaurantList />
      {
        isFetching ?
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          : null
      }
      {
        error ?
        <div className="alert alert-danger" role="alert">
          An error occured while fetching data
        </div>
        : null
      }
    </div>
  );
}

export default App;
