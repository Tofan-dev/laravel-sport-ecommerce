import {
    SALE_CREATE_FAIL,
    SALE_CREATE_REQUEST,
    SALE_CREATE_SUCCESS,
    SALE_CREATE_RESET,
    SALE_LIST_FAIL,
    SALE_LIST_REQUEST,
    SALE_LIST_SUCCESS,
    SALE_DELETE_FAIL,
    SALE_DELETE_REQUEST,
    SALE_DELETE_SUCCESS,
    SALE_UPDATE_FAIL,
    SALE_UPDATE_REQUEST,
    SALE_UPDATE_SUCCESS,
    SALE_UPDATE_RESET,
    SALE_SHOW_REQUEST,
    SALE_SHOW_SUCCESS,
    SALE_SHOW_FAIL,
} from "../constants/saleConstants";


// Sale list reducers
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
// Sale list reducers


// Create sale reducers
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
// Create sale reducers


// Delete sale reducers
export const saleDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SALE_DELETE_REQUEST:
            return { loading: true };

        case SALE_DELETE_SUCCESS:
            return { loading: false, success: true };

        case SALE_DELETE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Delete sale reducers


// Update sale reducers
export const saleUpdateReducer = (state = { sale: {} }, action) => {
    switch (action.type) {
        case SALE_UPDATE_REQUEST:
            return { loading: true, };

        case SALE_UPDATE_SUCCESS:
            return { loading: false, success: true, sale: action.payload };

        case SALE_UPDATE_FAIL:
            return { loading: false, error: action.payload };

        case SALE_UPDATE_RESET:
            return {};

        default:
            return state;
    }
}
// Update sale reducers

// Sale edit info reducers
export const saleShowReducer = (state = { sale: {} }, action) => {
    switch (action.type) {
        case SALE_SHOW_REQUEST:
            return { ...state, loading: true };
            
        case SALE_SHOW_SUCCESS:
            return { loading: false, sale: action.payload };
            
        case SALE_SHOW_FAIL:
            return { loading: false, error: action.payload };
            
        default:
            return state;
    }
};
// Sale edit info reducers