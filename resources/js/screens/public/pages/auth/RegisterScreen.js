import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import styled from "styled-components";
import { mobile } from "../../components/Responsive";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../components/utils/Loader";
import Message from "../../../../components/utils/Message";
import { Link } from "react-router-dom";
import { register } from "../../../../actions/userActions";

const Container = styled.div`
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("../images/tabletenis.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [message, setMessage] = useState(null);

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, success } = userRegister;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (!userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (password != passwordConfirmation) {
            setMessage("Passwords do not match");
        } else if (password.length < 6) {
            setMessage("Password can't be less than 6 characters");
        } else {
            dispatch(register(name, email, password, passwordConfirmation));

            navigate("/login");
        }
    };

    return (
        <Container>
            <Grid>
                <Card id="formStyle">
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Create new account
                        </Typography>
                        <form onSubmit={submitHandler}>
                            {error && (
                                <Message variant="error">{error}</Message>
                            )}
                            {loading && <Loader />}
                            <Grid container spacing={1}>
                                <Grid xs={12} item>
                                    <TextField
                                        placeholder="Enter username"
                                        type="text"
                                        label="User Name"
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
                                        placeholder="Enter email"
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField
                                        placeholder="Enter password"
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField
                                        placeholder="Confirm password"
                                        type="password"
                                        label="ConfirmPassword"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setPasswordConfirmation(
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

                                    <Link to="/login">I have an account.</Link>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};

export default RegisterScreen;
