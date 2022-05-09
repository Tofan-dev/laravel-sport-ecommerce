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
                        <Link
                            to="/admin/home"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon" />
                                Home
                            </li>
                        </Link>

                        <Link
                            to="/admin/products"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Inventory className="sidebarIcon" />
                                Products
                            </li>
                        </Link>

                        <Link
                            to="/admin/categories"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Inventory className="sidebarIcon" />
                                Categories
                            </li>
                        </Link>
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
