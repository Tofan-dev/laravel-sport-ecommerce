import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesList } from "../../../actions/categoryActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./CategoryListScreen.css";

const CategoryListScreen = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList);
    const { categories, loading, error } = categoryList;

    useEffect(() => {
        dispatch(getCategoriesList());
    }, [dispatch]);

    console.log(categories);
    
    function getDate(params) {
        return `${params.row.created_at || "-"}`;
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "title", headerName: "Title", width: 200 },
        {
            field: "image",
            headerName: "Image",
            width: 90,
            renderCell: (params) => {
                return (
                    <>
                        <img
                            className="productImage"
                            src={`http://127.0.0.1:8000/storage/${params.row.image}`}
                            alt="logo"
                        />
                    </>
                );
            },
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
                            className="categoryListEdit"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/category/edit/${params.row.id}`,
                                state: {
                                    id: params.row.id,
                                },
                            }}
                        >
                            Edit
                        </Link>

                        <Link
                            className="categoryListDelete"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/category/delete/${params.row.id}`,
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

    const rows = !isEmpty(categories) ? categories : [];

    const [pageSize, setPageSize] = React.useState(15);

    // console.log(rows);

    return (
        <>
            <div className="categoryList">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="error">{error}</Message>
                ) : (
                    <>
                        <Link
                            to="/admin/category/add"
                            style={{ textDecoration: "none", margin: "1%" }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                Add new category
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

export default CategoryListScreen;
