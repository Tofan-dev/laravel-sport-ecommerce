import { combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {
    productListReducer,
    productCreateReducer,
    productDeleteReducer,
    productUpdateReducer,
    productShowReducer
} from './reducers/productReducers'

import {
    categoryListReducer,
    categoryCreateReducer,
    categoryDeleteReducer,
    categoryUpdateReducer,
    categoryShowReducer
} from './reducers/categoryReducers'

import {
    saleListReducer,
    saleCreateReducer,
    saleDeleteReducer,
    saleUpdateReducer
} from './reducers/saleReducers'

import {
    reviewListReducer,
    reviewCreateReducer,
    reviewDeleteReducer,
    reviewUpdateReducer
} from './reducers/reviewReducers'

import {
    userListReducer,
    userCreateReducer,
    userDeleteReducer,
    userUpdateReducer
} from './reducers/userReducers'

const reducer = combineReducers({
    productList    : productListReducer,
    productCreate  : productCreateReducer,
    productDelete  : productDeleteReducer,
    productUpdate  : productUpdateReducer,
    productShow    : productShowReducer,
    
    categoryList   : categoryListReducer,
    categoryCreate : categoryCreateReducer,
    categoryDelete : categoryDeleteReducer,
    categoryUpdate : categoryUpdateReducer,
    categoryShow   : categoryShowReducer,
    
    saleList       : saleListReducer,
    saleCreate     : saleCreateReducer,
    saleDelete     : saleDeleteReducer,
    saleUpdate     : saleUpdateReducer,

    reviewList       : reviewListReducer,
    reviewCreate     : reviewCreateReducer,
    reviewDelete     : reviewDeleteReducer,
    reviewUpdate     : reviewUpdateReducer,

    userList       : userListReducer,
    userCreate     : userCreateReducer,
    userDelete     : userDeleteReducer,
    userUpdate     : userUpdateReducer,
});

const initialState = {};

const store = configureStore({
    reducer,
    initialState,
});

export default store;
