import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/admin/dashboard/Dashboard";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/admin/products/ProductListScreen";
import store from "./store";
import Home from "./screens/admin/home/Home";
import AddProduct from "./screens/admin/products/AddProduct";
import EditProduct from "./screens/admin/products/EditProduct";
import CategoryListScreen from "./screens/admin/categories/CategoryListScreen";
import AddCategory from "./screens/admin/categories/AddCategory";
import DeleteProduct from "./screens/admin/products/DeleteProduct";
import SaleListScreen from "./screens/admin/sales/SaleListScreen";
import AddSale from "./screens/admin/sales/AddSale";
import ReviewListScreen from "./screens/admin/reviews/ReviewListScreen";
import DeleteCategory from "./screens/admin/categories/DeleteCategory";
import DeleteSale from "./screens/admin/sales/DeleteSale";
import AddReview from "./screens/admin/reviews/AddReview";
import UserListScreen from "./screens/admin/users/UserListScreen";
import DeleteReview from "./screens/admin/reviews/DeleteReview";
import EditCategory from "./screens/admin/categories/EditCategory";
import EditSale from "./screens/admin/sales/EditSale";
import EditReview from "./screens/admin/reviews/EditReview";
import ShopPage from "./screens/public/pages/ShopPage";
import Product from "./screens/public/pages/Product";
import ProductList from "./screens/public/pages/ProductList";
import Pages from "./screens/public/pages/Pages";
import LoginScreen from "./screens/public/pages/auth/LoginScreen";
import RegisterScreen from "./screens/public/pages/auth/RegisterScreen";

const Index = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<RegisterScreen />} exact/>

                    {/* Admin Section */}
                    <Route path="/admin" element={<Dashboard />} exact>
                        <Route path="" element={<Home />} />
                        <Route
                            path="products"
                            element={<ProductListScreen />}
                            exact
                        />
                        <Route
                            path="categories"
                            element={<CategoryListScreen />}
                            exact
                        />
                        <Route
                            path="sales"
                            element={<SaleListScreen />}
                            exact
                        />
                        <Route
                            path="reviews"
                            element={<ReviewListScreen />}
                            exact
                        />
                        <Route
                            path="users"
                            element={<UserListScreen />}
                            exact
                        />

                        {/* Products Section */}
                        <Route path="product/add" element={<AddProduct />} />
                        <Route
                            path="product/edit/:id"
                            element={<EditProduct />}
                        />
                        <Route
                            path="product/delete/:id"
                            element={<DeleteProduct />}
                        />
                        {/* Products Section */}

                        {/* Categories Section */}
                        <Route path="category/add" element={<AddCategory />} />
                        <Route
                            path="category/edit/:id"
                            element={<EditCategory />}
                        />
                        <Route
                            path="category/delete/:id"
                            element={<DeleteCategory />}
                        />
                        {/* Categories Section */}

                        {/* Sales Section */}
                        <Route path="sale/add" element={<AddSale />} />
                        <Route
                            path="sale/delete/:id"
                            element={<DeleteSale />}
                        />
                        <Route path="sale/edit/:id" element={<EditSale />} />

                        {/* Sales Section */}

                        {/* Reviews Section */}
                        <Route path="review/add" element={<AddReview />} />
                        <Route
                            path="review/delete/:id"
                            element={<DeleteReview />}
                        />
                        <Route
                            path="review/edit/:id"
                            element={<EditReview />}
                        />
                        {/* Reviews Section */}
                    </Route>
                    {/* Admin Section */}

                    {/* Shop Section */}

                    <Route path="/shop" element={<Pages />} exact>
                        <Route path="" element={<ShopPage />} />
                        <Route path="product/:id" element={<Product />} exact />
                        <Route
                            path="products"
                            element={<ProductList />}
                            exact
                        />
                    </Route>

                    {/* Shop Section */}
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
