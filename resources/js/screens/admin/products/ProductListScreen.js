import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    deleteProduct,
    getProductsList,
    updateProduct,
} from "../../../actions/productActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./productList.css";
const ProductListScreen = () => {
    const dispatch = useDispatch();

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
        {
            field: "sale",
            headerName: "Sale ID",
            width: 130,
            valueGetter: (params) => {
                return params.value.description;
            },
        },
        { field: "name", headerName: "Name", width: 130 },
        { field: "description", headerName: "Description", width: 120 },
        { field: "price", headerName: "Price", width: 100 },
        {
            field: "priceWithDiscount",
            headerName: "PriceWithDiscount",
            width: 120,
        },
        { field: "stock", headerName: "Stock", width: 60 },
        {
            field: "rating",
            headerName: "Rating",
            width: 60,
            valueGetter: getRating,
        },
        {
            field: "totalReviews",
            headerName: "Total Reviews",
            width: 60,
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
                        <Link to={"/admin/product/edit/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <Link to={"/admin/product/delete/" + params.row.id}>
                            <button className="productListDelete">
                                Delete
                            </button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const rows = !isEmpty(products) ? products : [];

    const [pageSize, setPageSize] = React.useState(15);

    // const deleteProduct = (id) => {

    //     setProductId(id)
    // }

    // console.log(rows);

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
                            style={{
                                textDecoration: "none",
                                margin: '1%', 
                            }}
                            >
                            <Button variant="contained" size="large" color="error">
                                Add new product
                            </Button>
                        </Link>

                        <DataGrid
                            sx={{
                                color: "white",
                                height: "90%",
                                margin: '1%',
                                backgroundColor: '#1d1c1c',
                                ".MuiTablePagination-toolbar": {
                                    color:"white",
                                  },
                                ".MuiSelect-icon": {
                                    color:"white",
                                  },
                            }}
                            
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) =>
                                setPageSize(newPageSize)
                            }
                            rowsPerPageOptions={[10, 15, 25]}
                            pagination
                            columns={columns}
                            rows={rows}
                            disableSelectionOnClick
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default ProductListScreen;
