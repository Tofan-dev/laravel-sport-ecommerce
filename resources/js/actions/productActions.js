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
        
        // console.log("salut");
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
// Create product action 


// Delete product action 
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
// Delete product action 


// Update product action 
export const updateProduct =
    (
        id,
        name,
        categoryId,
        saleId,
        price,
        quantity,
        description,
    ) =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: PRODUCT_UPDATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.data.access_token}`,
                },
            };

            const { data } = await Axios.patch(
                `/api/products/${id}`,
                {
                    id,
                    name,
                    categoryId,
                    saleId,
                    price,
                    quantity,
                    description,
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