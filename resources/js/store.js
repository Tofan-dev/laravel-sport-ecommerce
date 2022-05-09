import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
    productListReducer,
    productCreateReducer
} from './reducers/productReducers'

import {
    categoryCreateReducer,
    categoryListReducer
} from './reducers/categoryReducers'

import {
    saleListReducer
} from './reducers/saleReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productCreate: productCreateReducer,

    categoryList: categoryListReducer,
    categoryCreate: categoryCreateReducer,

    saleList: saleListReducer
});

const initialState = {};

const store = configureStore({
    reducer,
    initialState,
});

export default store;
