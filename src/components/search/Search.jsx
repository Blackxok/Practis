import { Paper } from "@mui/material";
import { search_Icon } from "../../constant";
import React from "react";
import "./Search.css";

function SearchB() {
   return (
      <Paper
         className="inputPaper"
         component={"form"}
         sx={{ border: "1px solid #568956" }}
      >
         <div className="searchBar">
            <input type="text" placeholder="search" />
            <img src={search_Icon} alt="searchIcon" />
         </div>
      </Paper>
   );
}

export default SearchB;
