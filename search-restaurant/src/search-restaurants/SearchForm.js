import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
    searchCity, fetchCities, searchRestaurants
} from './actions'

const Search = () => {
    const { selctedCity } = useSelector(state => state.search, shallowEqual);
    const [errorMessage, setError] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log('Submit',city);
        if (selctedCity) {
            dispatch(searchRestaurants(selctedCity));
        } else {
            setError('Please enter city')
        }
    };
    const handleChange = (searchKey) => {
        dispatch(searchCity(searchKey));
    }

    useEffect(() => {
        fetchCities();
    }, []);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group col-md-6">
                    <label>City</label>
                    <input
                        value={selctedCity}
                        id="city"
                        type="text"
                        className="form-control md-sm-3"
                        onChange={e => handleChange(e.target.value)}
                    />
                    {(errorMessage) ? <p className="text-danger">{errorMessage}</p> : null}
                </div>

                <div className="form-group col-md-6">
                    <button className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    )
}
export default Search;
