import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../../../../actions/userActions";
import Loader from "../../../../components/utils/Loader";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

const LoginScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = location.search ? location.search.split("=")[1] : "/admin";

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, success, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    function successMsg() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
    }

    function errorMsg() {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: `${error}`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Try again",
            denyButtonText: `Go to shop`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/login";
            } else if (result.isDenied) {
                window.location = "/shop";
            }
        });
    }

    return (
        <Container>
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
                                    SIGN IN
                                </Typography>
                                <form onSubmit={submitHandler}>
                                    <Grid container spacing={1}>
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

                                        <Link to='/shop'>I don't have an account.</Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
        </Container>
    );
};

export default LoginScreen;
