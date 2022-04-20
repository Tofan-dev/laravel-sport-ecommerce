import { NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import "../../css/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="topLeft">
                    <span className="logo">TableTennis</span>
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
