import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSalesList } from "../../../actions/saleActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./saleList.css";

const SaleListScreen = () => {
    const dispatch = useDispatch();

    const saleList = useSelector((state) => state.saleList);
    const { sales, loading, error } = saleList;

    useEffect(() => {
        dispatch(getSalesList());
    }, [dispatch]);

    function getDate(params) {
        return `${params.row.created_at || "-"}`;
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "description", headerName: "Description", width: 130 },
        { field: "percent", headerName: "Percent", width: 70 },
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
                        <Link to={"/admin/sale/edit/" + params.row.id}>
                            <button className="saleListEdit">Edit</button>
                        </Link>
                        <Link to={"/admin/sale/delete/" + params.row.id}>
                            <button className="saleListDelete">Delete</button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const rows = !isEmpty(sales) ? sales : [];

    const [pageSize, setPageSize] = React.useState(15);

    // console.log(rows);
    return (
        <>
            <div className="saleList">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="error">{error}</Message>
                ) : (
                    <>
                        <Link
                            to="/admin/sale/add"
                            style={{ textDecoration: "none", margin: "1%" }}
                        >
                            <Button
                                variant="contained"
                                color="error"
                                size="large"
                            >
                                Add new sale
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

export default SaleListScreen;
