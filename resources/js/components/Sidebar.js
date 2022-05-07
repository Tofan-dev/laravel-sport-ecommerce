import {
    BorderColor,
    Home,
    Inventory,
    SupervisedUserCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../../css/sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link
                                to="/admin/home"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <Home className="sidebarIcon" />
                                Home
                            </Link>
                        </li>

                        <li className="sidebarListItem">
                            <Link
                                to="/admin/products"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <Inventory className="sidebarIcon" />
                                Products
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <BorderColor className="sidebarIcon" />
                            Orders
                        </li>
                        <li className="sidebarListItem">
                            <SupervisedUserCircle className="sidebarIcon" />
                            Users
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Example</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Home className="sidebarIcon" />
                            Example
                        </li>
                        <li className="sidebarListItem">
                            <Inventory className="sidebarIcon" />
                            Example
                        </li>
                        <li className="sidebarListItem">
                            <BorderColor className="sidebarIcon" />
                            Example
                        </li>
                        <li className="sidebarListItem">
                            <SupervisedUserCircle className="sidebarIcon" />
                            Example
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Example</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Home className="sidebarIcon" />
                            Example
                        </li>
                        <li className="sidebarListItem">
                            <Inventory className="sidebarIcon" />
                            Example
                        </li>
                        <li className="sidebarListItem">
                            <BorderColor className="sidebarIcon" />
                            Example
                        </li>
                        <li className="sidebarListItem">
                            <SupervisedUserCircle className="sidebarIcon" />
                            Example
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
