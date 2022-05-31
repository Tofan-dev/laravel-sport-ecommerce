import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import "../categories/editCategory.css";
import { useDispatch, useSelector } from "react-redux";
import {
    getCategoryEditInfo,
    updateCategory,
} from "../../../actions/categoryActions";
import Loader from "../../../components/utils/Loader";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const EditCategory = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    const categoryShow = useSelector((state) => state.categoryShow);
    const {
        category,
        loading: loadingCategories,
        error: errorCategories,
    } = categoryShow;

    const categoryUpdate = useSelector((state) => state.categoryUpdate);
    const { success, loading, error } = categoryUpdate;

    useEffect(() => {
        if (Object.keys(category).length === 0) {
            dispatch(getCategoryEditInfo(id));
        } else {
            setTitle(category.title);
        }
    }, [dispatch, category]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateCategory(id, title));
    };

    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Category updated successfully",
            showDenyButton: false,
            confirmButtonText: "See categories list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/categories";
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
            confirmButtonText: "See categories list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/categories";
            }
        });
    }

    return (
        <>
            <div className="categoryEdit">
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
                                <Typography gutterBottom variant="h5">
                                    EDIT CATEGORY
                                </Typography>
                                <form onSubmit={submitHandler}>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <TextField
                                                placeholder="Enter category title"
                                                label="Category Title"
                                                variant="outlined"
                                                fullWidth
                                                value={title}
                                                required
                                                onChange={(e) =>
                                                    setTitle(e.target.value)
                                                }
                                            />
                                        </Grid>

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

export default EditCategory;
