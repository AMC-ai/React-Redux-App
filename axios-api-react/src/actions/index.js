import axios from "axios";

export const FETCH_BORED_LOADING = "FETCH_BORED_LOADING";
export const FETCH_BORED_SUCCESS = "FETCH_BORED_SUCCESS";
export const FETCH_BORED_FAILED = "FETCH_BORED_FAILED";


export const fetchBored = () => {
    return dispatch => {
        dispatch({ type: FETCH_BORED_LOADING });
        axios
            .get('https://dog.ceo/api/breed/akita/images')
            .then(res => {
                // res.data.data
                console.log(res.data.message);
                dispatch({ type: FETCH_BORED_SUCCESS, payload: res.data.message });
            })
            .catch(err => {
                dispatch({ type: FETCH_BORED_FAILED, payload: err.response });
            });
    };
};

// export const boredLoading = () => ({ type: FETCH_BORED_LOADING });
// export const boredLoadSuccess = activity => ({
//     type: FETCH_BORED_SUCCESS,
//     payload: activity
// });
// export const boredLoadFailure = error => ({
//     type: FETCH_BORED_FAILED,
//     payload: error
// });

// export function fetchBored() {

//     return function (dispatch) {

//         dispatch(boredLoading());

//         return fetch(`https://dog.ceo/api/breeds/image/random`)
//             .then(res => res.json())

//             .then(json =>
//                 dispatch(boredLoadSuccess(json.results))
//             )
//             .catch(error => dispatch(boredLoadFailure(error)));
//     };
// }
