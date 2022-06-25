import {
    CategoryOutlined,
    FormatListNumberedOutlined,
    GroupOutlined,
    HomeOutlined,
    InventoryOutlined,
    LoyaltyOutlined,
    ReviewsOutlined,
} from "@mui/icons-material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../css/sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const redirect = location.search ? location.search.split("=")[1] : "/login";

    useEffect(() => {
        if (!userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect]);

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DASHBOARD</h3>
                    <ul className="sidebarList">
                        <Link
                            to="/admin"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <HomeOutlined
                                    className="sidebarIcon"
                                    sx={{ fontSize: "30px" }}
                                />
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
                                <InventoryOutlined
                                    className="sidebarIcon"
                                    sx={{ fontSize: "30px" }}
                                />
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
                                <CategoryOutlined
                                    className="sidebarIcon"
                                    sx={{ fontSize: "30px" }}
                                />
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
                                <LoyaltyOutlined
                                    className="sidebarIcon"
                                    sx={{ fontSize: "30px" }}
                                />
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
                                <ReviewsOutlined
                                    className="sidebarIcon"
                                    sx={{ fontSize: "30px" }}
                                />
                                Reviews
                            </li>
                        </Link>
                        {/* <Link
                            to="/admin/orders"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <FormatListNumberedOutlined
                                    className="sidebarIcon"
                                    sx={{ fontSize: "30px" }}
                                />
                                Orders
                            </li>
                        </Link> */}
                        <Link
                            to="/admin/users"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">
                                <GroupOutlined
                                    className="sidebarIcon"
                                    sx={{ fontSize: "30px" }}
                                />
                                Users
                            </li>
                        </Link>

                        <Link
                            to="/register"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <li className="sidebarListItem">               
                                Register new admin
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
