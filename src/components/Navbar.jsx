import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Log } from "../constants";

function Navbar() {
   return (
      <Stack className="container">
         <Link to={"/"}>
            <img className="imgLogo" src={Log} alt="Logo" />
         </Link>
         <Search
            className="searchIcon"
            sx={{ fontSize: `calc(var(--size) * 2)` }}
         />
      </Stack>
   );
}

export default Navbar;
