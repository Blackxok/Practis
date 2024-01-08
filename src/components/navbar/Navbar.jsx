import React from "react";
import "./Navbar.css";
import { Stack } from "@mui/material";
import { logo4 } from "../../constant";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <Stack className="container">
         <Link to={"/"}>
            <img src={logo4} alt="logo" className="imgLogo" />
         </Link>
      </Stack>
   );
}

export default Navbar;
