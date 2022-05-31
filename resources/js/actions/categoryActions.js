import axios from "axios";
import {
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_SHOW_FAIL,
    CATEGORY_SHOW_REQUEST,
    CATEGORY_SHOW_SUCCESS,
    CATEGORY_UPDATE_FAIL,
    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
} from "../constants/categoryConstants";

// Categories list action
export const getCategoriesList = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get("/api/categories", config);

        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Categories list action

// Create category action 
export const createCategory = (formData) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_CREATE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.post("/api/categories", formData, config);

        dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
// Create category action 


// Delete category action 
export const deleteCategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_DELETE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.delete(`/api/category/delete/${id}`, config);

        dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Delete category action 


// Update category action 
export const updateCategory =
    (
        id,
        category_title,
    ) =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_UPDATE_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.patch(
                `/api/category/update/${id}`,
                {
                    id,
                    category_title,
                },
                config
            );

            dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: CATEGORY_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.message
                        : error.message,
            });
        }
    };
// Update category action 

// Category edit info action
export const getCategoryEditInfo = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_SHOW_REQUEST });
        
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        // console.log('from action ' . id
        const { data } = await axios.get(`/api/category/edit/${id}`, config);
        
        dispatch({ type: CATEGORY_SHOW_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_SHOW_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.message
            : error.message,
        });
    }
};
// Category edit info action