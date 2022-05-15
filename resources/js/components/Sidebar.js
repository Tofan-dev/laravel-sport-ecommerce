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
                                color: "white",
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
                                color: "white",
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
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Inventory className="sidebarIcon" />
                                Categories
                            </li>
                        </Link>
                        <Link
                            to="/admin/sales"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Inventory className="sidebarIcon" />
                                Sales
                            </li>
                        </Link>
                        <Link
                            to="/admin/reviews"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Inventory className="sidebarIcon" />
                                Reviews
                            </li>
                        </Link>
                        <Link
                            to="/admin/orders"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Inventory className="sidebarIcon" />
                                Orders
                            </li>
                        </Link>
                        <Link
                            to="/admin/users"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <Inventory className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
