import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import "../admin.css";
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
    const [image, setImage] = useState();

    const categoryShow = useSelector((state) => state.categoryShow);
    const { category } = categoryShow;

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

        const formData = new FormData();
        formData.append("_method", "PATCH");
        formData.append("title", title);

        if (image) {
            formData.append("image", image);
        }

        dispatch(updateCategory(id, formData));
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
            <div className="mainContainer">
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
                                <form
                                    onSubmit={submitHandler}
                                    encType="multipart/form-data"
                                >
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
                                        <Grid xs={12} item>
                                            <h4>Category Image</h4>
                                            <img
                                                className="imageEdit"
                                                src={`http://127.0.0.1:8000/storage/${category.image}`}
                                                alt="NoImage"
                                            />

                                            <input
                                                type="file"
                                                className="addImageButton"
                                                onChange={(e) =>
                                                    setImage(e.target.files[0])
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
