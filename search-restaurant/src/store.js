import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
// Logger with default options
import logger from "redux-logger";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
    const middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger)
    }
    const store = createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
    return store;
}
export default configureStore;