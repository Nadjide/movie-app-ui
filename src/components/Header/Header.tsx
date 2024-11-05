// src/components/Header.tsx
import { Box, Typography } from "@mui/material";
import NavBar from "../Navbar/NavBar";
import classes from "Header.module.css";

export default function Header() {
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h5">
        My movie application
      </Typography>
      <Typography variant="body2">
        Search and browse among movies of TMDB database
      </Typography>
      <NavBar />
    </Box>
  );
}