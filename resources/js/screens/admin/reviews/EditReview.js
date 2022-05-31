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
import "../reviews/editReview.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/utils/Loader";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { getProductsList } from "../../../actions/productActions";
import { getUsersList } from "../../../actions/userActions";
import { getReviewEditInfo, updateReview } from "../../../actions/reviewActions";

const EditReview = () => {
    let { id } = useParams();

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

    const reviewShow = useSelector((state) => state.reviewShow);
    const { review } = reviewShow;

    const reviewUpdate = useSelector((state) => state.reviewUpdate);
    const { success, loading, error } = reviewUpdate;

    useEffect(() => {
        dispatch(getProductsList());
        dispatch(getUsersList());

        if (Object.keys(review).length === 0) {
            dispatch(getReviewEditInfo(id));
        } else {
            setProductId(review.product_id);
            setUserId(review.user_id);
            setRating(review.rating);
            setUserName(review.user_name);
            setUserComment(review.user_comment);
        }
    }, [dispatch, review]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            updateReview(id, productId, userId, rating, userName, userComment)
        );
    };

    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Review updated successfully",
            showDenyButton: false,
            confirmButtonText: "See reviews list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/reviews";
            }
        });
    }

    function errorMsg() {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: `${error}`,
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "See reviews list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/reviews";
            }
        });
    }

    return (
        <>
            <div className="reviewEdit">
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
                                    EDIT REVIEWS
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
                                                    {Object.keys(products).map(
                                                        function (key) {
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
                                                        }
                                                    )}
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
                                                                        ].name
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
                                                value={rating}
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
                                                value={userName}
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setUserName(e.target.value)
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
                                                value={userComment}
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
    );
};

export default EditReview;
