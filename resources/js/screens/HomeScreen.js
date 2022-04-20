import { Button, ButtonGroup, Grid } from "@mui/material";
import React from "react";
import "../../css/homepage.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShopIcon from "@mui/icons-material/Shop";
import { red } from "@mui/material/colors";

const HomeScreen = () => {
    return (
        <Grid
            className="background-image"
            container
            alignItems="center"
            justifyContent="center"
        >
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
