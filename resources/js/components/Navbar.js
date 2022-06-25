import { NotificationsNone, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
import logoDashboard from "../../images/logoDashboard.png";
import { logout } from "../actions/userActions";

const Navbar = () => {
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        setUserInfo(
            localStorage.getItem("userInfo")
                ? JSON.parse(localStorage.getItem("userInfo"))
                : null
        );
    }, [dispatch]);

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="topLeft">
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <img src={logoDashboard} className="logo" />
                    </Link>
                </div>
                <div className="topRight">
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                        }}
                        onClick={logoutHandler}
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
