import React, { useState } from "react";
import { Box, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Log } from "../constants";

function Navbar() {
   const [value, setValue] = useState("");
   // 
   const change = (e) => {
      setValue(e.target.value);
   };


   return (
      <Stack className="container">
         <Link to={"/"}>
            <img className="imgLogo" src={Log} alt="Logo" />
         </Link>
         <Box className="poiskBar">
            <Paper className="inputPaper">
               <input
                  type="text"
                  className="inputSame"
                  placeholder="search"
                  onChange={change}
                  value={value}
               />
            </Paper>
            <Search className="searchIcon" />
         </Box>
      </Stack>
   );
}

export default Navbar;
