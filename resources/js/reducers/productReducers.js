import {
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_RESET,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_RESET,
    PRODUCT_SHOW_REQUEST,
    PRODUCT_SHOW_SUCCESS,
    PRODUCT_SHOW_FAIL,
    PALETE_LIST_FAIL,
    PALETE_LIST_REQUEST,
    PALETE_LIST_RESET,
    PALETE_LIST_SUCCESS,
} from "../constants/productConstants";

// Product list reducers
export const productListReducer = (state = { products: {} }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };

        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Product list reducers

// Create product reducers
export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true };

        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };

        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload };

        case PRODUCT_CREATE_RESET:
            return {};

        default:
            return state;
    }
};
// Create product reducers

// Delete product reducers
export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true };

        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true };

        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Delete product reducers

// Update product reducers
export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true };

        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };

        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload };

        case PRODUCT_UPDATE_RESET:
            return {};

        default:
            return state;
    }
};
// Update product reducers

// Product edit info reducers
export const productShowReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_SHOW_REQUEST:
            return { ...state, loading: true };

        case PRODUCT_SHOW_SUCCESS:
            return { loading: false, product: action.payload };

        case PRODUCT_SHOW_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Product edit info reducers

export const paleteListReducer = (state = { palete: {} }, action) => {
    switch (action.type) {
        case PALETE_LIST_REQUEST:
            return { loading: true, palete: [] };

        case PALETE_LIST_SUCCESS:
            return { loading: false, palete: action.payload };

        case PALETE_LIST_FAIL:
            return { loading: false, error: action.payload };

        case PALETE_LIST_RESET:
            return {};

        default:
            return state;
    }
};