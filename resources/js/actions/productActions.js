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
    PRODUCT_SHOW_FAIL,
    PRODUCT_SHOW_REQUEST,
    PRODUCT_SHOW_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
} from "../constants/productConstants";

// Products list action
export const getProductsList = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        // console.log("from actions");
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
// Products list action

// Create product action
export const createProduct = (formData) => async (dispatch) => {
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
// Create product action

// Delete product action
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.delete(
            `/api/product/delete/${id}`,
            config
        );

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
// Delete product action

// Update product action
export const updateProduct =
    (id, name, categoryId, saleId, price, quantity, description, image) =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_UPDATE_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.patch(
                `/api/product/update/${id}`,
                {
                    id,
                    name,
                    categoryId,
                    saleId,
                    price,
                    quantity,
                    description,
                    image,
                },
                config
            );
            dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: PRODUCT_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.message
                        : error.message,
            });
        }
    };
// Update product action

// Product edit info action
export const getProductEditInfo = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SHOW_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        // console.log('from action ')
        const { data } = await axios.get(`/api/product/edit/${id}`, config);

        dispatch({ type: PRODUCT_SHOW_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_SHOW_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Product edit info action
