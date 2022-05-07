import {
    SALE_CREATE_FAIL,
    SALE_CREATE_REQUEST,
    SALE_CREATE_RESET,
    SALE_CREATE_SUCCESS,
    SALE_LIST_FAIL,
    SALE_LIST_REQUEST,
    SALE_LIST_SUCCESS,
} from "../constants/saleConstants";

export const saleListReducer = (state = { sales: {} }, action) => {
    switch (action.type) {
        case SALE_LIST_REQUEST:
            return { loading: true, sales: [] };

        case SALE_LIST_SUCCESS:
            return { loading: false, sales: action.payload };

        case SALE_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const saleCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SALE_CREATE_REQUEST:
            return { loading: true };

        case SALE_CREATE_SUCCESS:
            return { loading: false, success: true, sale: action.payload };

        case SALE_CREATE_FAIL:
            return { loading: false, error: action.payload };

        case SALE_CREATE_RESET:
            return {};

        default:
            return state;
    }
};
