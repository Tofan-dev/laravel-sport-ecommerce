import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
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
                            className="saleListEdit"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/sale/edit/${params.row.id}`,
                                state: {
                                    id: params.row.id,
                                },
                            }}
                        >
                            Edit
                        </Link>

                        <Link
                            className="saleListDelete"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/sale/delete/${params.row.id}`,
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
                                color="primary"
                                size="large"
                            >
                                Add new sale
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

export default SaleListScreen;
