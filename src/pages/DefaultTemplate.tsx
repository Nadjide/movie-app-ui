import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import classes from "../styles/classes.module.css";

export function DefaultTemplate() {
    return (
        <Box className={classes.root}>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    );
}