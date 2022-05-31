import {
    REVIEW_CREATE_FAIL,
    REVIEW_CREATE_REQUEST,
    REVIEW_CREATE_SUCCESS,
    REVIEW_CREATE_RESET,
    REVIEW_LIST_FAIL,
    REVIEW_LIST_REQUEST,
    REVIEW_LIST_SUCCESS,
    REVIEW_DELETE_FAIL,
    REVIEW_DELETE_REQUEST,
    REVIEW_DELETE_SUCCESS,
    REVIEW_UPDATE_FAIL,
    REVIEW_UPDATE_REQUEST,
    REVIEW_UPDATE_SUCCESS,
    REVIEW_UPDATE_RESET,
    REVIEW_SHOW_REQUEST,
    REVIEW_SHOW_SUCCESS,
    REVIEW_SHOW_FAIL,
} from "../constants/reviewConstants";

// Review list reducers
export const reviewListReducer = (state = { reviews: {} }, action) => {
    switch (action.type) {
        case REVIEW_LIST_REQUEST:
            return { loading: true, reviews: [] };

        case REVIEW_LIST_SUCCESS:
            return { loading: false, reviews: action.payload };

        case REVIEW_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Review list reducers

// Create review reducers
export const reviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case REVIEW_CREATE_REQUEST:
            return { loading: true };

        case REVIEW_CREATE_SUCCESS:
            return { loading: false, success: true, review: action.payload };

        case REVIEW_CREATE_FAIL:
            return { loading: false, error: action.payload };

        case REVIEW_CREATE_RESET:
            return {};

        default:
            return state;
    }
};
// Create review reducers

// Delete review reducers
export const reviewDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case REVIEW_DELETE_REQUEST:
            return { loading: true };

        case REVIEW_DELETE_SUCCESS:
            return { loading: false, success: true };

        case REVIEW_DELETE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Delete review reducers

// Update review reducers
export const reviewUpdateReducer = (state = { review: {} }, action) => {
    switch (action.type) {
        case REVIEW_UPDATE_REQUEST:
            return { loading: true };

        case REVIEW_UPDATE_SUCCESS:
            return { loading: false, success: true, review: action.payload };

        case REVIEW_UPDATE_FAIL:
            return { loading: false, error: action.payload };

        case REVIEW_UPDATE_RESET:
            return {};

        default:
            return state;
    }
};
// Update review reducers

// Review edit info reducers
export const reviewShowReducer = (state = { review: {} }, action) => {
    switch (action.type) {
        case REVIEW_SHOW_REQUEST:
            return { ...state, loading: true };

        case REVIEW_SHOW_SUCCESS:
            return { loading: false, review: action.payload };

        case REVIEW_SHOW_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Review edit info reducers
