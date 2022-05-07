import axios from "axios";
import {
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const getProductsList = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get("/api/products", config);

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};

export const createProduct = (formData) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.post("/api/products", formData, config);

        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.delete(`/api/products/${id}`, config);

        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
