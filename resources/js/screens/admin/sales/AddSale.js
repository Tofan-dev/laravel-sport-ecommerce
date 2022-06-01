import React, { useState } from "react";
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
import { createSale } from "../../../actions/saleActions";
import NumberFormat from "react-number-format";
import Loader from "../../../components/utils/Loader";
import Swal from "sweetalert2";

const AddSale = () => {
    const dispatch = useDispatch();

    const [description, setDescription] = useState("");
    const [percent, setPercent] = useState("");

    const saleCreate = useSelector((state) => state.saleCreate);
    const { loading, success, error } = saleCreate;

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("description", description);
        formData.append("percent", percent);

        dispatch(createSale(formData));

    };
    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Sale added successfully",
            showDenyButton: true,
            confirmButtonText: "See sales list",
            denyButtonText: `Add another sale`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/sales";
            } else if (result.isDenied) {
                window.location = "/admin/sale/add";
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
            confirmButtonText: "See sales list",
            denyButtonText: `Try again`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/sales";
            } else if (result.isDenied) {
                window.location = "/admin/sale/add";
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
                                Add new sale
                            </Typography>
                            <form onSubmit={submitHandler}>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <TextField
                                            placeholder="Enter sale description"
                                            label="Sale Description"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    <Grid xs={12} item>
                                        <NumberFormat
                                            variant="outlined"
                                            name="percent"
                                            label="Percent %"
                                            fullWidth
                                            customInput={TextField}
                                            decimalScale={2}
                                            onChange={(e) =>
                                                setPercent(e.target.value)
                                            }
                                            required
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

export default AddSale;
