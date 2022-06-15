import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Pages = () => {
    return (
        <>
            <Info />
            <Navbar />
            <Outlet />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Pages
