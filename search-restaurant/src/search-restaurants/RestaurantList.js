import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import {
    refineSearch, clearFilters
} from './actions'
export default () => {
    const { filteredRestaurants, refine, count } = useSelector(state => state.search, shallowEqual);
    const dispatch = useDispatch();

    const renderRestuarants = () => {
        if (filteredRestaurants && filteredRestaurants.length === 0) {
            return (
                <p className="text-danger">
                    NO RECORDS TO DISPLAY
                     </p>
            )
        }
        return filteredRestaurants.map((restaurant) => {
            return (
                <div className="card w-75 mb-3" key={restaurant.id}>
                    <div className="card-body">
                        <h5 className="card-title"><strong>{restaurant.name}</strong></h5>
                        <div className="card-sub-title">{restaurant.address}, {restaurant.city}, {restaurant.state},{restaurant.postal_code}</div>
                        <div className="card-text">Price: {`$${parseFloat(restaurant.price).toFixed(2)}`}</div>
                        <a href={restaurant.reserve_url} className="card-link">Reserve</a>
                    </div>
                </div>
            )
        })
    }

    const handleRefine = (refine) => {
        (refine.length > 0) ? dispatch(refineSearch(refine)) : dispatch(clearFilters())
    }
    return (
        <div >
            <h3> Restaurants</h3>
            {(count) > 0 ?
                <div className="w-75 mb-3">
                    <label>Refine by Address, Name or Area</label>
                    <input
                        value={refine}
                        id="refine"
                        type="text"
                        className="form-control md-sm-3"
                        placeholder="Address, Name or Area"
                        onChange={e => handleRefine(e.target.value)}
                    />
                    <span>Total Found: {count} Showing: {filteredRestaurants.length} </span>

                </div> : null
            }
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {renderRestuarants()}
            </div>
        </div>
    )
}