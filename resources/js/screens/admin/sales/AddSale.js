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
import "../sales/addSale.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/utils/Loader";
import Message from "../../../components/utils/Message";
import { createSale } from "../../../actions/saleActions";
import NumberFormat from "react-number-format";

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
    return (
        <>
            <div className="saleAdd">
                {error && <Message variant="error">{error}</Message>}
                {error && <Message variant="success">{error}</Message>}
                <Grid>
                    <Card className="form">
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
                                            color="success"
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

export default AddSale;
