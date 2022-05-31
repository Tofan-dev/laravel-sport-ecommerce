import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import "../sales/editSale.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/utils/Loader";
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";
import { getSaleEditInfo, updateSale } from "../../../actions/saleActions";

const EditSale = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    const [description, setDescription] = useState("");
    const [percent, setPercent] = useState("");

    const saleShow = useSelector((state) => state.saleShow);
    const { sale, loading: loadingSales, error: errorSales } = saleShow;

    const saleUpdate = useSelector((state) => state.saleUpdate);
    const { success, loading, error } = saleUpdate;

    useEffect(() => {
        if (Object.keys(sale).length === 0) {
            dispatch(getSaleEditInfo(id));
        } else {
            setDescription(sale.description);
            setPercent(sale.percent);
        }
    }, [dispatch, sale]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateSale(id, description, percent));
    };

    function successMsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Sale updated successfully",
            showDenyButton: false,
            confirmButtonText: "See sales list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/sales";
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
            confirmButtonText: "See sales list",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/admin/sales";
            }
        });
    }

    return (
        <>
            <div className="saleEdit">
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
                                    EDIT SALE
                                </Typography>
                                <form onSubmit={submitHandler}>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <TextField
                                                placeholder="Enter sale description"
                                                label="Sale Description"
                                                variant="outlined"
                                                value={description}
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>

                                        <Grid xs={12} item>
                                            <NumberFormat
                                                variant="outlined"
                                                name="percent"
                                                label="Percent %"
                                                value={percent}
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

export default EditSale;
