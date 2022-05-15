import { NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";

const Navbar = () => {
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
                            <span className="logo">TableTennis</span>
                        </Link>
                </div>
                <div className="topRight">
                    <div className="navbarIcons">
                        <NotificationsNone />
                        <span className="topIconBag"> 3 </span>
                    </div>
                    <div className="navbarIcons">
                        <Settings />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
