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
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import NumberFormat from "react-number-format";
import Dropzone from "react-dropzone";
import { getCategoriesList } from "../../../actions/categoryActions";
import { getSalesList } from "../../../actions/saleActions";
import { getProductEditInfo } from "../../../actions/productActions";
import { updateProduct } from "../../../actions/productActions";
import "../admin.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
    let { id } = useParams();

    const dispatch = useDispatch();
    const dropzoneRef = createRef();

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

    const productShow = useSelector((state) => state.productShow);
    const { product, loading: loadingProducts, error: errorProducts } = productShow;

    const productUpdate = useSelector((state) => state.productUpdate);
    const { success, loading, error } = productUpdate;

    useEffect(() => {
        dispatch(getCategoriesList());
        dispatch(getSalesList());

        if (Object.keys(product).length === 0) {
            dispatch(getProductEditInfo(id));
        } else {
            setName(product.name);
            setDescription(product.description);
            setQuantity(product.stock);
            setPrice(product.price);
            setCategoryId(product.category_id);
            setSaleId(product.sale_id);
            setImage(product.image);
        }
    }, [dispatch, product]);

    const openDialog = () => {
        if (dropzoneRef.current) {
            dropzoneRef.current.open();
        }
    };

    const handleImages = (acceptedFiles) => {
        setImage(acceptedFiles);
    };

    const submitHandler = (e) => {
        e.preventDefault(); 

        dispatch(
            updateProduct(
                id,
                name,
                categoryId,
                saleId,
                price,
                quantity,
                description,
                image,
            )
        );
    };

    
    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Product updated successfully",
            showDenyButton: false,
            confirmButtonText: "See products list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/products";
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
            confirmButtonText: "See products list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/products";
            }
        });
    }

    return (
        <>
            <div className="mainContainer">
            {loadingProducts ? (
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
                                    Edit product
                                </Typography>
                                <form onSubmit={submitHandler}>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <TextField
                                                placeholder="Enter product name"
                                                label="Product Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                value={name}
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
                                                value={description}
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
                                                value={price}
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
                                                value={quantity}
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setQuantity(e.target.value)
                                                }
                                            />
                                        </Grid>

                                        <img
                                            className="imageEdit"
                                            src={`http://127.0.0.1:8000/storage/${product.image}`}
                                            alt="logo"
                                        />

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
                                                                    images here
                                                                </p>
                                                                <Button
                                                                    variant="contained"
                                                                    type="button"
                                                                    onClick={
                                                                        openDialog
                                                                    }
                                                                >
                                                                    Open File
                                                                    Dialog
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

export default EditProduct;
