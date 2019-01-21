import constants from '../../constants';

const initialState = {
    movies: [],
    isFetching: false,
    error: null
};

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                isFetching: false
            };
        case constants.GET_MOVIES_IN_PROGRESS:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case constants.GET_MOVIES_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state
    }
}