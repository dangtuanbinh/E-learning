import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import course from './Reducers/courseReducer';
import auth from './Reducers/authReducer';
import wishList from './Reducers/wishListReducer'
import userList from "./Reducers/userListReducer"
import { compose } from 'redux';

const reducer = combineReducers({
    course, 
    auth,
    wishList,
    userList,
});

// Redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;