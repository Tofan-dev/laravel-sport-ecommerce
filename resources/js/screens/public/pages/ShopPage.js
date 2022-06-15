import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";

const ShopPage = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
        </>
    );
};

export default ShopPage;
