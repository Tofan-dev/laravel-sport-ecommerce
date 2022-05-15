import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {
    productListReducer,
    productCreateReducer,
    productDeleteReducer,
    productUpdateReducer
} from './reducers/productReducers'

import {
    categoryListReducer,
    categoryCreateReducer,
    categoryDeleteReducer,
    categoryUpdateReducer
} from './reducers/categoryReducers'

import {
    saleListReducer,
    saleCreateReducer,
    saleDeleteReducer,
    saleUpdateReducer
} from './reducers/saleReducers'

const reducer = combineReducers({
    productList    : productListReducer,
    productCreate  : productCreateReducer,
    productDelete  : productDeleteReducer,
    productUpdate  : productUpdateReducer,
    
    categoryList   : categoryListReducer,
    categoryCreate : categoryCreateReducer,
    categoryDelete : categoryDeleteReducer,
    categoryUpdate : categoryUpdateReducer,
    
    saleList       : saleListReducer,
    saleCreate     : saleCreateReducer,
    saleDelete     : saleDeleteReducer,
    saleUpdate     : saleUpdateReducer,
});

const initialState = {};

const store = configureStore({
    reducer,
    initialState,
});

export default store;
