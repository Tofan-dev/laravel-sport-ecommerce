import { combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {
    productListReducer,
    productCreateReducer,
    productDeleteReducer,
    productUpdateReducer,
    productShowReducer,
    paleteListReducer
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
    saleUpdateReducer,
    saleShowReducer
} from './reducers/saleReducers'

import {
    reviewListReducer,
    reviewCreateReducer,
    reviewDeleteReducer,
    reviewUpdateReducer,
    reviewShowReducer
} from './reducers/reviewReducers'

import {
    userListReducer,
    userCreateReducer,
    userDeleteReducer,
    userUpdateReducer,
    userLoginReducer,
    userRegisterReducer
} from './reducers/userReducers'

const reducer = combineReducers({
    productList    : productListReducer,
    productCreate  : productCreateReducer,
    productDelete  : productDeleteReducer,
    productUpdate  : productUpdateReducer,
    productShow    : productShowReducer,
    paleteList     : paleteListReducer,
    
    categoryList   : categoryListReducer,
    categoryCreate : categoryCreateReducer,
    categoryDelete : categoryDeleteReducer,
    categoryUpdate : categoryUpdateReducer,
    categoryShow   : categoryShowReducer,
    
    saleList       : saleListReducer,
    saleCreate     : saleCreateReducer,
    saleDelete     : saleDeleteReducer,
    saleUpdate     : saleUpdateReducer,
    saleShow       : saleShowReducer,

    reviewList     : reviewListReducer,
    reviewCreate   : reviewCreateReducer,
    reviewDelete   : reviewDeleteReducer,
    reviewUpdate   : reviewUpdateReducer,
    reviewShow     : reviewShowReducer,

    userList       : userListReducer,
    userCreate     : userCreateReducer,
    userDelete     : userDeleteReducer,
    userUpdate     : userUpdateReducer,
    userRegister   : userRegisterReducer,
    userLogin      : userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
    },

    cart: {
        cartItems: cartItemsFromStorage
    }
};

const store = configureStore({
    reducer,
    initialState,
});

export default store;
