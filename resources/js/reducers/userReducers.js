import {
    USER_CREATE_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_RESET,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_RESET,
} from "../constants/userConstants";

// User list reducers
export const userListReducer = (state = { users: {} }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true, users: [] };

        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload };

        case USER_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// User list reducers

// Create user reducers
export const userCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_REQUEST:
            return { loading: true };

        case USER_CREATE_SUCCESS:
            return { loading: false, success: true, user: action.payload };

        case USER_CREATE_FAIL:
            return { loading: false, error: action.payload };

        case USER_CREATE_RESET:
            return {};

        default:
            return state;
    }
};
// Create user reducers

// Delete user reducers
export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { loading: true };

        case USER_DELETE_SUCCESS:
            return { loading: false, success: true };

        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
// Delete user reducers

// Update user reducers
export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };

        case USER_UPDATE_SUCCESS:
            return { loading: false, success: true, user: action.payload };

        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };

        case USER_UPDATE_RESET:
            return {};

        default:
            return state;
    }
};
// Update user reducers

// User edit info reducers
// export const userShowReducer = (state = { user: {} }, action) => {
//     switch (action.type) {
//         case USER_SHOW_REQUEST:
//             return { ...state, loading: true };

//         case USER_SHOW_SUCCESS:
//             return { loading: false, user: action.payload };

//         case USER_SHOW_FAIL:
//             return { loading: false, error: action.payload };

//         default:
//             return state;
//     }
// };
// User edit info reducers
