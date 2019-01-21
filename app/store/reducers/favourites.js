import constants from '../../constants';

const initialState = {
    favourites: [],
    isProcessing: false
};

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.PROCESSING_FAVS:
            return {
                ...state,
                isProcessing: true
            };
        case constants.GET_FAVS:
            return {
                ...state,
                favourites: action.payload,
                isProcessing: false
            };
        case constants.ADD_TO_FAVS:
            return {
                ...state,
                isProcessing: false,
                favourites: [action.payload, ...state.favourites]
            };
        case constants.REMOVE_FROM_FAVS:
            return {
                ...state,
                isProcessing: false,
                favourites: [...state.favourites.filter((fav) => (fav.idIMDB !== action.payload.idIMDB))]
            };
        default:
            return state
    }
}