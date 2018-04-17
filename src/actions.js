import {ADD_BOOK, RECEIVE_BOOKS} from'./constants';


export function fetchBooks(url) {
    return dispatch => {
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveBooks(json)))
    }
}

export function addToMyBooks(book) {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

function receiveBooks(json) {
    return {
        type: RECEIVE_BOOKS,
        payload: json.items,
    }
}