import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Search.css";

function SearchB() {
   return (
      <Paper
         component={"form"}
         sx={{ border: "1px solid #568956" }}
         className="inputPaper"
      >
         <input type="text" placeholder="search" />
         
      </Paper>
   );
}

export default SearchB;
