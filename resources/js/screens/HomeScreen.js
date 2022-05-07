import { Button, Grid } from "@mui/material";
import "../../css/homepage.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShopIcon from "@mui/icons-material/Shop";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <Grid
            className="background-image"
            container
            alignItems="center"
            justifyContent="center"
        >
            <Link to="/admin/home" style={{ textDecoration: 'none' }} >
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<AdminPanelSettingsIcon />}
                    sx={{
                        backgroundColor: "#DA1212",
                        "&:hover": {
                            backgroundColor: "#b30d0d",
                        },
                    }}
                >
                    Admin Panel
                </Button>
            </Link>
            <Button
                variant="contained"
                size="large"
                startIcon={<ShopIcon />}
                sx={{
                    backgroundColor: "#1C6DD0",
                    "&:hover": {
                        backgroundColor: "#144c91",
                    },
                }}
            >
                Shop Page
            </Button>
        </Grid>
    );
};

export default HomeScreen;
