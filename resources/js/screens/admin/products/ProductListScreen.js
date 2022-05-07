import { DeleteOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty, isNull } from "lodash";
import React, { useEffect, useState, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsList } from "../../../actions/productActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./productList.css";
import Moment from "react-moment";

const ProductListScreen = () => {
    const dispatch = useDispatch();

    const [productId, setProductId] = useState("");

    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;

    useEffect(() => {
        dispatch(getProductsList());
    }, [dispatch]);

    function getRating(params) {
        return `${params.row.rating || "-"}`;
    }

    function getReview(params) {
        return `${params.row.totalReviews || "-"}`;
    }

    function getDate(params) {
        return `${params.row.created_at || "-"}`;
    }

    let date = '2022-04-10T18:27:44.000000Z';

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "category",
            headerName: "Category Title",
            width: 130,
            valueGetter: (params) => {
                return params.value.title;
            },
        },
        { field: "sale_id", headerName: "Sale ID", width: 130 },
        { field: "name", headerName: "Name", width: 130 },
        { field: "description", headerName: "Description", width: 120 },
        { field: "price", headerName: "Price", width: 100 },
        {
            field: "priceWithDiscount",
            headerName: "PriceWithDiscount",
            width: 120,
        },
        { field: "stock", headerName: "Stock", width: 120 },
        {
            field: "rating",
            headerName: "Rating",
            width: 120,
            valueGetter: getRating,
        },
        {
            field: "totalReviews",
            headerName: "Total Reviews",
            width: 120,
            valueGetter: getReview,
        },
        {
            field: "created_at",
            headerName: "Created at",
            width: 120,
            valueGetter: getDate,
        },
        { field: "updated_at", headerName: "Updated at", width: 120 },
        {
            field: "action",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/edit/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>

                        {/* <button className="productListEdit" onClick={deleteProduct(params.row.id)}>Delete</button> */}
                    </>
                );
            },
        },
    ];

    const rows = !isEmpty(products) ? products.data : [];

    // const deleteProduct = (id) => {

    //     setProductId(id)
    // }

    console.log('productId', productId);
    return (
        <>
            <div className="productList">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="error">{error}</Message>
                ) : (
                    <>
                        <Link
                            to="/admin/product/add"
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="contained" size="large">
                                Add new product
                            </Button>
                        </Link>

                        <DataGrid
                            rows={rows}
                            disableSelectionOnClick
                            columns={columns}
                            checkboxSelection
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default ProductListScreen;
