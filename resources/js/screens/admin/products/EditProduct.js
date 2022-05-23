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
import { createProduct } from "../../../actions/productActions";
import "../products/editProduct.css";
import { WindowSharp } from "@mui/icons-material";

const EditProduct = () => {
    const dispatch = useDispatch();
    const dropzoneRef = createRef();

    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [saleId, setSaleId] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [images, setImages] = useState();

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

        // if (product &&) {
        //     setName(product.name)
        //     setCategoryId(product.categoryId)
        //     setSaleId()
        // }
    }, [dispatch]);

    const openDialog = () => {
        // Note that the ref is set async,
        // so it might be null at some point
        if (dropzoneRef.current) {
            dropzoneRef.current.open();
        }
    };

    const handleImages = (acceptedFiles) => {
        setImages(acceptedFiles);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("categoryId", categoryId);
        formData.append("saleId", saleId);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("description", description);

        if (images) {
            for (let i = 0; i < images.length; i++) {
                formData.append(`images[${i}]`, images[i]);
            }
        }

        dispatch(editProduct(formData));
        

    };

    return (
        <>
            <div className="productEdit">
                {error && <Message variant="error">{error}</Message>}
                <Grid>
                    <Card className="form">
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Add new product
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
                                            required
                                            onChange={(e) =>
                                                setDescription(e.target.value)
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
                                                {Object.keys(categories).map(
                                                    function (key) {
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
                                                    }
                                                )}
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
                                                    setSaleId(e.target.value)
                                                }
                                                sx={{ width: 1 }}
                                            >
                                                <MenuItem value="" disabled>
                                                    Choose sale title
                                                </MenuItem>
                                                {/* <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                 */}
                                                {Object.keys(sales).map(
                                                    function (key) {
                                                        return (
                                                            <MenuItem
                                                                key={key}
                                                                value={
                                                                    sales[key]
                                                                        .id
                                                                }
                                                            >
                                                                {
                                                                    sales[key]
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
                                            renderText={(formattedValue) => (
                                                <Text>{formattedValue}</Text>
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
                                                            {...getRootProps({
                                                                className:
                                                                    "dropzone",
                                                            })}
                                                        >
                                                            <input
                                                                {...getInputProps()}
                                                            />
                                                            <p>
                                                                Drag and drop
                                                                the product
                                                                images here
                                                            </p>
                                                            <Button
                                                                variant="contained"
                                                                type="button"
                                                                onClick={
                                                                    openDialog
                                                                }
                                                            >
                                                                Open File Dialog
                                                            </Button>
                                                        </div>
                                                        <aside>
                                                            <h4>Files</h4>
                                                            <ul>
                                                                {acceptedFiles.map(
                                                                    (file) => (
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
            </div>
        </>
    );
};

export default EditProduct;
