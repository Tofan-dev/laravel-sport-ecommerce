import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from './screens/products/ProductListScreen';
import store from "./store";

const Index = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />
                    <Route path="/products" element={<ProductListScreen />} />
                </Routes>
            </Router>

        </>
    );
};

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Provider store={store}>
            <Index />
        </Provider>,
        document.getElementById("app")
    );
}
