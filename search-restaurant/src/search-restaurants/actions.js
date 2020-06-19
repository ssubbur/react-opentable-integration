import axios from 'axios';

export const SEARCH_CITY = 'SEARCH_CITY'
export const REFINE_SEARCH = 'REFINE_SEARCH'
export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS'
export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';
export const CLEAR_FILTER_RESTAURANTS = 'CLEAR_FILTER_RESTAURANTS';

export const searchCity = city => ({
    type: SEARCH_CITY,
    city
})

export const requestRestaurants = params => ({
    type: REQUEST_RESTAURANTS,
    params
});

export const receiveRestaurants = (results) => ({
    type: RECEIVE_RESTAURANTS,
    results
})
export const requestFailed = (error) => ({
    type: REQUEST_FAILED,
    error
})

export const receiveCities = (cities) => ({
    type: RECEIVE_CITIES,
    cities
})
export const fetchCities = () => async dispatch => {
    try {
        const results = await axios.get(`https://opentable.herokuapp.com/api/cities`);
        return dispatch(receiveCities(results));
    }
    catch (error) {
        console.log(error.toJSON());
    }
}
export const fetchRestaurants = params => async dispatch => {
    try {
        dispatch(requestRestaurants(params));
        const searchParams = { ...params, per_page: 100 };
        return await axios.get(`https://opentable.herokuapp.com/api/restaurants`, { params: searchParams })
            .then(response => dispatch(receiveRestaurants(response.data)))
            .catch(err => {
                dispatch(requestFailed(err))
            });
    }
    catch (error) {
        console.log(error);
    }
}

const filterRestaurants = (filteredRestaurants) => ({
    type: FILTER_RESTAURANTS,
    filteredRestaurants
})
export const clearFilters = () => ({
    type: CLEAR_FILTER_RESTAURANTS
})
export const refineSearch = filter => (dispatch, getState) => {
    const { restaurants } = getState().search;
    filter = filter.toLowerCase();
    const filteredRestuarants = restaurants.filter(restaurant =>
        (restaurant.name.toLowerCase().indexOf(filter) > 0 || restaurant.address.toLowerCase().indexOf(filter) > 0
            || restaurant.area.toLowerCase().indexOf(filter) > 0)
    )
    return dispatch(filterRestaurants(filteredRestuarants));
}
export const searchRestaurants = (city, filter) => (dispatch, getState) => {
    const param = (filter) ? { city, name: filter } : { city };
    // dispatch(refineSearch(filter));
    return dispatch(fetchRestaurants(param));
}
