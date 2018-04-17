import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import booksReducer from './booksReducer';

export default combineReducers({
    routing: routerReducer,
    books: booksReducer
});