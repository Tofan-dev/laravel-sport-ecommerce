import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/admin/dashboard/Dashboard";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/admin/products/ProductListScreen";
import store from "./store";
import Home from "./screens/admin/home/Home"
import AddProduct from "./screens/admin/products/AddProduct";
import EditProduct from "./screens/admin/products/EditProduct";
import CategoryListScreen from "./screens/admin/categories/CategoryListScreen";
import AddCategory from "./screens/admin/categories/AddCategory";
import DeleteProduct from "./screens/admin/products/DeleteProduct";
const Index = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />

                    {/* Admin Section */}
                    <Route path="/admin" element={<Dashboard />} exact >
                        <Route path="home" element={<Home />} />
                        <Route path="products" element={<ProductListScreen />} exact/>
                        <Route path="categories" element={<CategoryListScreen />} exact />
                    {/* Products Section */}
                        <Route path="product/add" element={<AddProduct />}/>
                        <Route path="product/edit/:id" element={<EditProduct />}/>
                        <Route path="product/delete/:id" element={<DeleteProduct />}/>
                    {/* Products Section */}

                    {/* Categories Section */}
                        <Route path="category/add" element={<AddCategory />}/>
                        <Route path="category/edit/:id" element={<EditProduct />}/>
                  
                    {/* Categories Section */}
                    </Route>
                    {/* Admin Section */}

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
