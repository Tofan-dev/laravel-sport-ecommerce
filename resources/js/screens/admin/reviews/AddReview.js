import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import "../reviews/addReview.css";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../../actions/reviewActions";
import { getProductsList } from "../../../actions/productActions";
import { getUsersList } from "../../../actions/userActions";
import Loader from "../../../components/utils/Loader";
import Swal from "sweetalert2";

const AddReview = () => {

    const dispatch = useDispatch();

    const [productId, setProductId] = useState("");
    const [userId, setUserId] = useState("");
    const [rating, setRating] = useState("");
    const [userName, setUserName] = useState("");
    const [userComment, setUserComment] = useState("");

    const productList = useSelector((state) => state.productList);
    const {
        products,
        loading: loadingProducts,
        error: errorProducts,
    } = productList;

    const userList = useSelector((state) => state.userList);
    const { users, loading: loadingUsers, error: errorUsers } = userList;

    const reviewCreate = useSelector((state) => state.reviewCreate);
    const { loading, success, error } = reviewCreate;
    
    useEffect(() => {
        dispatch(getProductsList());
        dispatch(getUsersList());
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("productId", productId);
        formData.append("userId", userId);
        formData.append("rating", rating);
        formData.append("userName", userName);
        formData.append("userComment", userComment);

        dispatch(createReview(formData));
    };

    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Review added successfully",
            showDenyButton: true,
            confirmButtonText: "See reviews list",
            denyButtonText: `Add another review`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/reviews";
            } else if (result.isDenied) {
                window.location = "/admin/review/add";
            }
        });
    }

    function errorMsg() {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: `${error}`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "See reviews list",
            denyButtonText: `Try again`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/reviews";
            } else if (result.isDenied) {
                window.location = "/admin/review/add";
            }
        });
}

return (
    <>
    <div className="productAdd">
        {loading ? (
            <Loader />
        ) : error ? (
            <>{errorMsg()}</>
        ) : success ? (
            <>{successMsg()}</>
        ) : (
            <Grid>
                <Card id="formStyle">
                    <CardContent>
                        <Typography variant="h5">
                            ADD NEW REVIEW
                        </Typography>
                        <br />
                        <form onSubmit={submitHandler}>
                            <Grid container spacing={1}>
                                {loadingProducts ? (
                                    <Loader />
                                ) : errorProducts ? (
                                    <Message variant="error">
                                        {errorProducts}
                                    </Message>
                                ) : (
                                    <Grid xs={12} item width={"100%"}>
                                        <InputLabel id="Product Name">
                                            Product
                                        </InputLabel>
                                        <Select
                                            labelId="Product Name"
                                            value={productId}
                                            label="Choose product"
                                            displayEmpty
                                            onChange={(e) =>
                                                setProductId(
                                                    e.target.value
                                                )
                                            }
                                            sx={{ width: 1 }}
                                        >
                                            <MenuItem value="" disabled>
                                                Choose product name
                                            </MenuItem>
                                            {Object.keys(
                                                products
                                            ).map(function (key) {
                                                return (
                                                    <MenuItem
                                                        key={key}
                                                        value={
                                                            products[
                                                                key
                                                            ].id
                                                        }
                                                    >
                                                        {
                                                            products[
                                                                key
                                                            ].name
                                                        }
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </Grid>
                                )}

                                {loadingUsers ? (
                                    <Loader />
                                ) : errorUsers ? (
                                    <Message variant="error">
                                        {errorUsers}
                                    </Message>
                                ) : (
                                    <Grid xs={12} item>
                                        <InputLabel id="User">
                                            User
                                        </InputLabel>
                                        <Select
                                            labelId="User"
                                            value={userId}
                                            label="User Name"
                                            displayEmpty
                                            onChange={(e) =>
                                                setUserId(
                                                    e.target.value
                                                )
                                            }
                                            sx={{ width: 1 }}
                                        >
                                            <MenuItem value="" disabled>
                                                Choose user name
                                            </MenuItem>

                                            {Object.keys(users).map(
                                                function (key) {
                                                    return (
                                                        <MenuItem
                                                            key={key}
                                                            value={
                                                                users[
                                                                    key
                                                                ].id
                                                            }
                                                        >
                                                            {
                                                                users[
                                                                    key
                                                                ]
                                                                    .name
                                                            }
                                                        </MenuItem>
                                                    );
                                                }
                                            )}
                                        </Select>
                                    </Grid>
                                )}

                                <Grid xs={12} item>
                                    <TextField
                                        type="text"
                                        placeholder="Enter rating"
                                        label="Rating"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setRating(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        placeholder="Enter user name"
                                        label="User Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setUserName(
                                                e.target.value
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        placeholder="Enter user comment"
                                        multiline
                                        rows={4}
                                        label="User comment"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setUserComment(
                                                e.target.value
                                            )
                                        }
                                    />
                                </Grid>

                                <br />
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        )}
    </div>
</>
  )
};
export default AddReview;