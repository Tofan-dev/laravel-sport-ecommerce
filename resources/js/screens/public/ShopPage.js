import React from "react";
import Categories from "./components/Categories";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const ShopPage = () => {
    return (
        <>
            <Info />
            <Navbar />
            <Slider />
            <Categories />
        </>
    );
};

export default ShopPage;
