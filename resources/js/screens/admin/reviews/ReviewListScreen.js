import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
    getReviewsList,
} from "../../../actions/reviewActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./reviewList.css";

const ReviewListScreen = () => {
    const dispatch = useDispatch();

    const reviewList = useSelector((state) => state.reviewList);
    const { reviews, loading, error } = reviewList;

    useEffect(() => {
        dispatch(getReviewsList());
    }, [dispatch]);

    function getRating(params) {
        return `${params.row.rating || "-"}`;
    }

    function getDate(params) {
        return `${params.row.created_at || "-"}`;
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "product",
            headerName: "Product Name",
            width: 160,
            valueGetter: (params) => {
                return params.value.name;
            },
        },
        {
            field: "user_id",
            headerName: "User ID",
            width: 160,
        },
        { field: "user_name", headerName: "User Name", width: 270 },
        { field: "user_comment", headerName: "Comment", width: 270 },
        {
            field: "rating",
            headerName: "Rating",
            width: 90,
            valueGetter: getRating,
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
                            className="reviewListEdit"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/review/edit/${params.row.id}`,
                                state: {
                                    id: params.row.id,
                                },
                            }}
                        >
                            Edit
                        </Link>

                        <Link
                            className="reviewListDelete"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/review/delete/${params.row.id}`,
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

    const rows = !isEmpty(reviews) ? reviews : [];

    const [pageSize, setPageSize] = React.useState(15);

    // console.log(rows);

    return (
        <>
            <div className="reviewList">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="error">{error}</Message>
                ) : (
                    <>
                        <Link
                            to="/admin/review/add"
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
                                Add new review
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

export default ReviewListScreen;
