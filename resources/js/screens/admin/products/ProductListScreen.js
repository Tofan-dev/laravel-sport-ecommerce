import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsList } from "../../../actions/productActions";
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
            width: 160,
            valueGetter: (params) => {
                return params.value.description;
            },
        },
        { field: "name", headerName: "Name", width: 150 },
        { field: "description", headerName: "Description", width: 170 },
        {
            field: "image",
            headerName: "Image",
            width: 90,
            renderCell: (params) => {
                return (
                    <>
                        <img
                            src={`http://127.0.0.1:8000/storage/${params.row.image}`}
                            alt="logo"
                        />
                    </>
                );
            },
        },
        { field: "price", headerName: "Price", width: 90 },
        {
            field: "priceWithDiscount",
            headerName: "PriceWithDiscount",
            width: 90,
        },
        { field: "stock", headerName: "Stock", width: 90 },
        {
            field: "rating",
            headerName: "Rating",
            width: 70,
            valueGetter: getRating,
        },
        {
            field: "totalReviews",
            headerName: "Total Reviews",
            width: 90,
            valueGetter: getReview,
        },
        {
            field: "created_at",
            headerName: "Created at",
            width: 105,
            valueGetter: getDate,
        },
        { field: "updated_at", headerName: "Updated at", width: 105 },
        {
            field: "action",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            className="productListEdit"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/product/edit/${params.row.id}`,
                                state: {
                                    id: params.row.id,
                                },
                            }}
                        >
                            Edit
                        </Link>

                        <Link
                            className="productListDelete"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/product/delete/${params.row.id}`,
                                state: {
                                    id: params.row.id,
                                },
                            }}
                        >
                            Delete
                        </Link>
                    </>
                );
            },
        },
    ];

    const rows = !isEmpty(products) ? products : [];

    const [pageSize, setPageSize] = React.useState(15);

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
                                margin: "1%",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                            >
                                Add new product
                            </Button>
                        </Link>

                        <DataGrid
                            sx={{
                                height: "90%",
                                margin: "1%",
                                backgroundColor: "white",
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
