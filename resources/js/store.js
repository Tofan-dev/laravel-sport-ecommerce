import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {
    productListReducer,
    productCreateReducer,
    productDeleteReducer,
    productUpdateReducer
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
    productDeletet: productDeleteReducer,
    productUpdate: productUpdateReducer,

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
