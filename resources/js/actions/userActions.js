import axios from "axios";
import {
    USER_CREATE_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_SHOW_FAIL,
    USER_SHOW_REQUEST,
    USER_SHOW_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

// Users list action
export const getUsersList = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        // console.log("from actions");
        const { data } = await axios.get("/api/users", config);

        dispatch({ type: USER_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Users list action

// Create user action
export const createUser = (formData) => async (dispatch) => {
    try {
        dispatch({ type: USER_CREATE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.post("/api/users", formData, config);

        dispatch({ type: USER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
// Create user action

// Delete user action
export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_DELETE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.delete(`/api/user/delete/${id}`, config);

        dispatch({ type: USER_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Delete user action

// Update user action
export const updateUser = (id, name) => async (dispatch) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.patch(
            `/api/users/${id}`,
            {
                id,
                name,
            },
            config
        );

        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Update user action

// User edit info action
export const getUserEditInfo = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_SHOW_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        // console.log('from action ')
        const { data } = await axios.get(`/api/user/edit/${id}`, config);

        dispatch({ type: USER_SHOW_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_SHOW_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// User edit info action
