import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsersList } from "../../../actions/userActions";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import "./userListScreen.css";

const UserListScreen = () => {

    const dispatch = useDispatch();

    const userList = useSelector((state) => state.userList);
    const { users, loading, error } = userList;

    useEffect(() => {
        dispatch(getUsersList());
    }, [dispatch]);

    function getDate(params) {
        return `${params.row.created_at || "-"}`;
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "password", headerName: "Password", width: 200 },
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
                            className="userListEdit"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/user/edit/${params.row.id}`,
                                state: {
                                    id: params.row.id,
                                },
                            }}
                        >
                            Edit
                        </Link>

                        <Link
                            className="userListDelete"
                            style={{
                                textDecoration: "none",
                            }}
                            to={{
                                pathname: `/admin/user/delete/${params.row.id}`,
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

    const rows = !isEmpty(users) ? users : [];

    const [pageSize, setPageSize] = React.useState(15);

    // console.log(rows);


  return (
    <>
            <div className="userList">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="error">{error}</Message>
                ) : (
                    <>
                        <Link
                            to="/admin/user/add"
                            style={{ textDecoration: "none", margin: "1%" }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                Add new user
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
  )
}

export default UserListScreen;