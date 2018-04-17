import {RECEIVE_BOOKS, ADD_BOOK} from '../constants';


const initialState = {
    myBooks: [],
    googleBooks: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_BOOKS: {
            state = Object.assign({}, state, {googleBooks: action.payload});

            return state;
        }

        case ADD_BOOK: {
            let newMyBooks = state.myBooks;
            newMyBooks.push(action.payload);
            state = Object.assign({}, state, {myBooks: newMyBooks});

            return state;
        }

        default:
            return state
    }
};

export default reducer;
