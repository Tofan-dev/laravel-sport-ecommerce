import axios from "axios";
import {
    SALE_CREATE_FAIL,
    SALE_CREATE_REQUEST,
    SALE_CREATE_SUCCESS,
    SALE_DELETE_FAIL,
    SALE_DELETE_REQUEST,
    SALE_DELETE_SUCCESS,
    SALE_LIST_FAIL,
    SALE_LIST_REQUEST,
    SALE_LIST_SUCCESS,
    SALE_SHOW_FAIL,
    SALE_SHOW_REQUEST,
    SALE_SHOW_SUCCESS,
    SALE_UPDATE_FAIL,
    SALE_UPDATE_REQUEST,
    SALE_UPDATE_SUCCESS,
} from "../constants/saleConstants";

// Sales list action
export const getSalesList = () => async (dispatch) => {
    try {
        dispatch({ type: SALE_LIST_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get("/api/sales", config);

        dispatch({ type: SALE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SALE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Sales list action

// Create sale action
export const createSale = (formData) => async (dispatch) => {
    try {
        dispatch({ type: SALE_CREATE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.post("/api/sales", formData, config);

        dispatch({ type: SALE_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SALE_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
// Create sale action

// Delete sale action
export const deleteSale = (id) => async (dispatch) => {
    try {
        dispatch({ type: SALE_DELETE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.delete(`/api/sale/delete/${id}`, config);

        dispatch({ type: SALE_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SALE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Delete sale action

// Update sale action
export const updateSale = (id, description, percent) => async (dispatch) => {
    try {
        dispatch({ type: SALE_UPDATE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.patch(
            `/api/sale/update/${id}`,
            {
                id,
                description,
                percent,
            },
            config
        );

        dispatch({ type: SALE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SALE_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Update sale action

// Sale edit info action
export const getSaleEditInfo = (id) => async (dispatch) => {
    try {
        dispatch({ type: SALE_SHOW_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get(`/api/sale/edit/${id}`, config);

        dispatch({ type: SALE_SHOW_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SALE_SHOW_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Sale edit info action
