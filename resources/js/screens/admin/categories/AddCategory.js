import React, { createRef, useState } from "react";
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
import { createCategory } from "../../../actions/categoryActions";
import Loader from "../../../components/utils/Loader";
import Swal from "sweetalert2";
import Dropzone from "react-dropzone";

const AddCategory = () => {
    const dispatch = useDispatch();
    const dropzoneRef = createRef();

    const [title, setTitle] = useState("");
    const [images, setImages] = useState();

    const categoryCreate = useSelector((state) => state.categoryCreate);
    const { loading, success, error } = categoryCreate;

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("category_title", title);

        if (images) {
            for (let i = 0; i < images.length; i++) {
                formData.append(`images[${i}]`, images[i]);
            }
        }

        dispatch(createCategory(formData));
    };

    const openDialog = () => {
        if (dropzoneRef.current) {
            dropzoneRef.current.open();
        }
    };

    const handleImages = (acceptedFiles) => {
        setImages(acceptedFiles);
    };

    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Category added successfully",
            showDenyButton: true,
            confirmButtonText: "See categories list",
            denyButtonText: `Add another category`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/categories";
            } else if (result.isDenied) {
                window.location = "/admin/category/add";
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
            confirmButtonText: "See categories list",
            denyButtonText: `Try again`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/categories";
            } else if (result.isDenied) {
                window.location = "/admin/category/add";
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
                                    Add new category
                                </Typography>
                                <form onSubmit={submitHandler}>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <TextField
                                                placeholder="Enter category title"
                                                label="Category Title"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setTitle(e.target.value)
                                                }
                                            />
                                        </Grid>

                                        <Grid xs={12} item>
                                            <Dropzone
                                                ref={dropzoneRef}
                                                noClick
                                                noKeyboard
                                                onDrop={handleImages}
                                            >
                                                {({
                                                    getRootProps,
                                                    getInputProps,
                                                    acceptedFiles,
                                                }) => {
                                                    return (
                                                        <div className="drop">
                                                            <div
                                                                {...getRootProps(
                                                                    {
                                                                        className:
                                                                            "dropzone",
                                                                    }
                                                                )}
                                                            >
                                                                <input
                                                                    {...getInputProps()}
                                                                />
                                                                <p>
                                                                    Drag and
                                                                    drop the
                                                                    product
                                                                    images here:
                                                                </p>
                                                                <Button
                                                                    variant="contained"
                                                                    type="button"
                                                                    color="primary"
                                                                    onClick={
                                                                        openDialog
                                                                    }
                                                                >
                                                                    Open File
                                                                </Button>
                                                            </div>
                                                            <aside>
                                                                <h4>Files</h4>
                                                                <ul>
                                                                    {acceptedFiles.map(
                                                                        (
                                                                            file
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    file.path
                                                                                }
                                                                            >
                                                                                {
                                                                                    file.path
                                                                                }{" "}
                                                                                -{" "}
                                                                                {
                                                                                    file.size
                                                                                }{" "}
                                                                                bytes
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </aside>
                                                        </div>
                                                    );
                                                }}
                                            </Dropzone>
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

export default AddCategory;
