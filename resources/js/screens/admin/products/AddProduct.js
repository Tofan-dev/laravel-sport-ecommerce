import React, { useEffect, useState, createRef } from "react";
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
import "../admin.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import NumberFormat from "react-number-format";
import { getCategoriesList } from "../../../actions/categoryActions";
import { getSalesList } from "../../../actions/saleActions";
import { createProduct } from "../../../actions/productActions";
import Swal from "sweetalert2";

const AddProduct = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [saleId, setSaleId] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState();

    const categoryList = useSelector((state) => state.categoryList);
    const {
        categories,
        loading: loadingCategories,
        error: errorCategories,
    } = categoryList;

    const saleList = useSelector((state) => state.saleList);
    const { sales, loading: loadingSales, error: errorSales } = saleList;

    const productCreate = useSelector((state) => state.productCreate);
    const { loading, success, error } = productCreate;

    useEffect(() => {
        dispatch(getCategoriesList());
        dispatch(getSalesList());
    }, [dispatch]);

    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added successfully",
            showDenyButton: true,
            confirmButtonText: "See products list",
            denyButtonText: `Add another product`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/products";
            } else if (result.isDenied) {
                window.location = "/admin/product/add";
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
            confirmButtonText: "See products list",
            denyButtonText: `Try again`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/products";
            } else if (result.isDenied) {
                window.location = "/admin/product/add";
            }
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("categoryId", categoryId);
        formData.append("saleId", saleId);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("description", description);

        if (image) {
            formData.append("image", image);
        }

        dispatch(createProduct(formData));
    };

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
                                <Typography variant="h5">
                                    ADD NEW PRODUCT
                                </Typography>
                                <br />
                                <form onSubmit={submitHandler} encType="multipart/form-data">
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <TextField
                                                placeholder="Enter product name"
                                                label="Product Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                            />
                                        </Grid>
                                        <Grid xs={12} item>
                                            <TextField
                                                placeholder="Enter product description"
                                                multiline
                                                rows={4}
                                                label="Product Description"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>

                                        {loadingCategories ? (
                                            <Loader />
                                        ) : errorCategories ? (
                                            <Message variant="error">
                                                {errorCategories}
                                            </Message>
                                        ) : (
                                            <Grid xs={12} item width={"100%"}>
                                                <InputLabel id="Category Title">
                                                    Category
                                                </InputLabel>
                                                <Select
                                                    labelId="Category Title"
                                                    value={categoryId}
                                                    label="Choose category"
                                                    displayEmpty
                                                    onChange={(e) =>
                                                        setCategoryId(
                                                            e.target.value
                                                        )
                                                    }
                                                    sx={{ width: 1 }}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Choose category title
                                                    </MenuItem>
                                                    {Object.keys(
                                                        categories
                                                    ).map(function (key) {
                                                        return (
                                                            <MenuItem
                                                                key={key}
                                                                value={
                                                                    categories[
                                                                        key
                                                                    ].id
                                                                }
                                                            >
                                                                {
                                                                    categories[
                                                                        key
                                                                    ].title
                                                                }
                                                            </MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                            </Grid>
                                        )}

                                        {loadingSales ? (
                                            <Loader />
                                        ) : errorSales ? (
                                            <Message variant="error">
                                                {errorSales}
                                            </Message>
                                        ) : (
                                            <Grid xs={12} item>
                                                <InputLabel id="Sale">
                                                    Sale
                                                </InputLabel>
                                                <Select
                                                    labelId="Sale"
                                                    value={saleId}
                                                    label="Description"
                                                    displayEmpty
                                                    onChange={(e) =>
                                                        setSaleId(
                                                            e.target.value
                                                        )
                                                    }
                                                    sx={{ width: 1 }}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Choose sale title
                                                    </MenuItem>

                                                    {Object.keys(sales).map(
                                                        function (key) {
                                                            return (
                                                                <MenuItem
                                                                    key={key}
                                                                    value={
                                                                        sales[
                                                                            key
                                                                        ].id
                                                                    }
                                                                >
                                                                    {
                                                                        sales[
                                                                            key
                                                                        ]
                                                                            .description
                                                                    }
                                                                </MenuItem>
                                                            );
                                                        }
                                                    )}
                                                </Select>
                                            </Grid>
                                        )}
                                        <Grid xs={12} item>
                                            <NumberFormat
                                                variant="outlined"
                                                name="price"
                                                label="Price €"
                                                fullWidth
                                                customInput={TextField}
                                                decimalScale={2}
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                                required
                                                renderText={(
                                                    formattedValue
                                                ) => (
                                                    <Text>
                                                        {formattedValue}
                                                    </Text>
                                                )}
                                            />
                                        </Grid>

                                        <Grid xs={12} item>
                                            <TextField
                                                type="number"
                                                placeholder="Enter product stock"
                                                label="Stock"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setQuantity(e.target.value)
                                                }
                                            />
                                        </Grid>

                                        <Grid xs={12} item>
                                        <div class="file-input">
                                                <input
                                                    type="file"
                                                    id="file"
                                                    class="file"
                                                    onChange={(e) =>
                                                        setImage(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                                <label for="file">
                                                    Upload image
                                                </label>
                                            </div>
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

export default AddProduct;
