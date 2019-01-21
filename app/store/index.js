import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import constants from '../constants.js';
import moviesPayload from '../../moviesPayload.json';

import {getFavouriteMoviesFromStorage} from './actions';

// Reducers
import movies from './reducers/movies';
import favourites from './reducers/favourites';

const reducers = {
    movies,
    favourites
};

const getMoviesAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(moviesPayload);
            } catch(e) {
                reject(e);
            }
        }, 2000);
    });
};

export default function configureStore() {
    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(thunk)
    );

    store.dispatch({type: constants.GET_MOVIES_IN_PROGRESS});
    Promise.all([getMoviesAsync(), getFavouriteMoviesFromStorage()])
    .then(([movies, favourites]) => {
        store.dispatch({type: constants.GET_MOVIES, payload: movies});
        store.dispatch({type: constants.GET_FAVS, payload: (favourites || [])});
    })
    .catch((err) => {
        store.dispatch({type: constants.GET_MOVIES_ERROR, payload: err});
    });

    return store;
}