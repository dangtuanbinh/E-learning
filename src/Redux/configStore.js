import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import course from './Reducers/courseReducer';
import { compose } from 'redux';

const reducer = combineReducers({
    course,
});

// Redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;