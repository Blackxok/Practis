import React from "react";
import { Box, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Log } from "../constants";

function Navbar() {
   return (
      <Stack className="container">
         <Link to={"/"}>
            <img className="imgLogo" src={Log} alt="Logo" />
         </Link>
         <Box className="poiskBar">
            <Paper className="inputPaper">
               <input type="text" className="inputSame" placeholder="search" />
            </Paper>
            <Search
               className="searchIcon"
               sx={{ fontSize: `calc(var(--size) * 2)` }}
            />
         </Box>
      </Stack>
   );
}

export default Navbar;
