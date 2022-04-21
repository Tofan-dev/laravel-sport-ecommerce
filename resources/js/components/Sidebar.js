
import { BorderColor, Home, Inventory, SupervisedUserCircle } from "@mui/icons-material";
import "../../css/sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                          <Home className="sidebarIcon" />
                          Home
                        </li>
                        <li className="sidebarListItem">
                          <Inventory className="sidebarIcon"/>
                          Products
                        </li>
                        <li className="sidebarListItem">
                          <BorderColor className="sidebarIcon"/>
                          Orders
                        </li>
                        <li className="sidebarListItem">
                          <SupervisedUserCircle className="sidebarIcon"/>
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
                          <Inventory className="sidebarIcon"/>
                          Example
                        </li>
                        <li className="sidebarListItem">
                          <BorderColor className="sidebarIcon"/>
                          Example
                        </li>
                        <li className="sidebarListItem">
                          <SupervisedUserCircle className="sidebarIcon"/>
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
                          <Inventory className="sidebarIcon"/>
                          Example
                        </li>
                        <li className="sidebarListItem">
                          <BorderColor className="sidebarIcon"/>
                          Example
                        </li>
                        <li className="sidebarListItem">
                          <SupervisedUserCircle className="sidebarIcon"/>
                          Example
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
