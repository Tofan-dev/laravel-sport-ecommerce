import axios from "axios";
import {
    REVIEW_CREATE_FAIL,
    REVIEW_CREATE_REQUEST,
    REVIEW_CREATE_SUCCESS,
    REVIEW_DELETE_FAIL,
    REVIEW_DELETE_REQUEST,
    REVIEW_DELETE_SUCCESS,
    REVIEW_LIST_FAIL,
    REVIEW_LIST_REQUEST,
    REVIEW_LIST_SUCCESS,
    REVIEW_SHOW_FAIL,
    REVIEW_SHOW_REQUEST,
    REVIEW_SHOW_SUCCESS,
    REVIEW_UPDATE_FAIL,
    REVIEW_UPDATE_REQUEST,
    REVIEW_UPDATE_SUCCESS,
} from "../constants/reviewConstants";

// Reviews list action
export const getReviewsList = () => async (dispatch) => {
    try {
        dispatch({ type: REVIEW_LIST_REQUEST });
        
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        // console.log("salut");
        const { data } = await axios.get("/api/reviews", config);
        
        dispatch({ type: REVIEW_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: REVIEW_LIST_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.message
            : error.message,
        });
    }
};
// Reviews list action


// Create review action 
export const createReview = (formData) => async (dispatch) => {
    try {
        dispatch({ type: REVIEW_CREATE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.post("/api/reviews", formData, config);

        dispatch({ type: REVIEW_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: REVIEW_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
// Create review action 


// Delete review action 
export const deleteReview= (id) => async (dispatch) => {
    try {
        dispatch({ type: REVIEW_DELETE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.delete(`/api/review/delete/${id}`, config);

        dispatch({ type: REVIEW_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: REVIEW_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.message
                    : error.message,
        });
    }
};
// Delete review action 

// Update review action 
export const updateReview =
    (
        id,
        productId,
        userId,
        rating,
        userName,
        userComment,
    ) =>
    async (dispatch) => {
        try {
            dispatch({ type: REVIEW_UPDATE_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.patch(
                `/api/review/update/${id}`,
                {
                    id,
                    productId,
                    userId,
                    rating,
                    userName,
                    userComment,
                },
                config
            );

            dispatch({ type: REVIEW_UPDATE_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: REVIEW_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.message
                        : error.message,
            });
        }
    };
// Update review action 

// Review edit info action
export const getReviewEditInfo = (id) => async (dispatch) => {
    try {
        dispatch({ type: REVIEW_SHOW_REQUEST });
        
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        // console.log('from action ' . id
        const { data } = await axios.get(`/api/review/edit/${id}`, config);
        
        dispatch({ type: REVIEW_SHOW_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: REVIEW_SHOW_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.message
            : error.message,
        });
    }
};
// Review edit info action