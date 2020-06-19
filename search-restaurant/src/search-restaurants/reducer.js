import {
    SEARCH_CITY,
    REQUEST_RESTAURANTS, RECEIVE_CITIES, RECEIVE_RESTAURANTS, 
    REFINE_SEARCH, FILTER_RESTAURANTS, CLEAR_FILTER_RESTAURANTS, REQUEST_FAILED
} from './actions'

const initialState = {
    restaurants: [],
    filteredRestaurants: [],
    cities: [],
    selctedCity: '',
    isFetching: false
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        selctedCity:action.city,
        isFetching: false
    }
    case RECEIVE_CITIES:
      return {
        ...state,
        isFetching: false,
        cities:action.cities
      }
    case REQUEST_RESTAURANTS:
            return {
                ...state,
                isFetching: true,
                restaurants:[],
                error: null
        }
    case RECEIVE_RESTAURANTS:
        return {
            ...state,
            isFetching: false,
            restaurants: action.results.restaurants,
            filteredRestaurants: action.results.restaurants,
            count: action.results.total_entries
        }
    case REQUEST_FAILED:
            return {
              ...state,
              isFetching: false,
              error: action.error,
              restaurants: []
            };
    case REFINE_SEARCH:
          return {
            ...state,
            isFetching: false,
            refine: action.filter
        }
    case FILTER_RESTAURANTS:
        return {
          ...state,
          filteredRestaurants: action.filteredRestaurants
      }
    case CLEAR_FILTER_RESTAURANTS:
        return {
          ...state,
          filteredRestaurants: state.restaurants
      }
    default:
      return state
  }
}

export default search;


