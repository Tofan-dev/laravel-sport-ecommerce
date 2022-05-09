import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesList} from "../../../actions/categoryActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./CategoryListScreen.css"

const CategoryListScreen = () => {
    const dispatch = useDispatch();

    const [categoryId, setCategoryId] = useState("");

    const categoryList = useSelector((state) => state.categoryList);
    const { categories, loading, error } = categoryList;

    useEffect(() => {
        dispatch(getCategoriesList());
    }, [dispatch]);

    // function getRating(params) {
    //     return `${params.row.rating || "-"}`;
    // }

    // function getReview(params) {
    //     return `${params.row.totalReviews || "-"}`;
    // }

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
                        {/* <Link to={"/product/edit/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <Link to={"/product/delete/" + params.row.id}>
                            <button className="productListDelete" onClick={deleteProduct(params.row.id)}>Delete</button>                 
                        </Link> */}
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
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="contained" size="large">
                                Add new category
                            </Button>
                        </Link>

                        <DataGrid
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
