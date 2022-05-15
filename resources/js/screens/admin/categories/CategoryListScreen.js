import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesList } from "../../../actions/categoryActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./CategoryListScreen.css";

const CategoryListScreen = () => {
    const dispatch = useDispatch();

    const [categoryId, setCategoryId] = useState("");

    const categoryList = useSelector((state) => state.categoryList);
    const { categories, loading, error } = categoryList;

    useEffect(() => {
        dispatch(getCategoriesList());
    }, [dispatch]);

    function getDate(params) {
        return `${params.row.created_at || "-"}`;
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "title", headerName: "Title", width: 130 },
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
                        <Link to={"/admin/category/edit/" + params.row.id}>
                            <button className="categoryListEdit">Edit</button>
                        </Link>
                        <Link to={"/admin/category/delete/" + params.row.id}>
                            <button className="categoryListDelete">
                                Delete
                            </button>
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
                                color="error"
                                size="large"
                            >
                                Add new category
                            </Button>
                        </Link>

                        <DataGrid
                            sx={{
                                color: "white",
                                height: "90%",
                                margin: "1%",
                                backgroundColor: "#1d1c1c",
                                ".MuiTablePagination-toolbar": {
                                    color: "white",
                                },
                                ".MuiSelect-icon": {
                                    color: "white",
                                },
                                ".MuiSvgIcon-fontSizeSmall": {
                                    color: "white",
                                },
                                ".MuiSvgIcon-root": {
                                    color: "white",
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

export default CategoryListScreen;
