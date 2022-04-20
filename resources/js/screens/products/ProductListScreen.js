import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    getProductsList
} from "../../actions/productActions"
import Loader from '../../components/utils/Loader';
import Message from '../../components/utils/Message';

const ProductListScreen = () => {
    const dispatch = useDispatch(); 

    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;

    useEffect(() => {
        
        dispatch(getProductsList());

    }, [dispatch]);

    return (
        <div>
            {loading ? <Loader /> : error ? <Message variant="error">{error}</Message> : (
                products.data?.map((product) => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                    </div> 
                ))
            )}

            <Link   
                to="/"
                className="auth-form--action__link"
            >
                HomeScreen
            </Link>
        </div>
    );
}

export default ProductListScreen