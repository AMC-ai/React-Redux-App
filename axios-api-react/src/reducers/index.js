import {
    FETCH_BORED_LOADING,
    FETCH_BORED_SUCCESS,
    FETCH_BORED_FAILED
} from '../actions/index';

const initialState =
{
    activity: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    // console.log("reducer", action);
    switch (action.type) {
        case FETCH_BORED_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_BORED_SUCCESS:
            return {
                ...state,
                activity: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_BORED_FAILED:
            return {
                ...state,
                activity: [],
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;