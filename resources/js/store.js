import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
    productListReducer
} from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
});

const initialState = {};

const store = configureStore({
    reducer,
    initialState,
});

export default store;
