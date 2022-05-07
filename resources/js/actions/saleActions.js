import axios from "axios";
import {
    SALE_CREATE_FAIL,
    SALE_CREATE_REQUEST,
    SALE_CREATE_SUCCESS,
    SALE_LIST_FAIL,
    SALE_LIST_REQUEST,
    SALE_LIST_SUCCESS,
} from "../constants/saleConstants";

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

export const createSale = (formData) => async (dispatch, getState) => {
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
