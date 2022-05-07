import axios from "axios";
import {
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
} from "../constants/categoryConstants";

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

export const createCategory = (formData) => async (dispatch, getState) => {
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
