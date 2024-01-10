import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Log } from "../constants";

function Navbar() {
   return (
      <Stack className="container">
         <Link to={"/"}>
            <img src={Log} alt="Logo" />
         </Link>
         <Search sx={{ color: "red" }} />
      </Stack>
   );
}

export default Navbar;
