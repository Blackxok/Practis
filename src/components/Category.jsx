import React from "react";
import { Home, LiveTv, MusicVideo } from "@mui/icons-material";
import { Box } from "@mui/material";

function Category() {
   const categorys = [
      { name: "Live", icon: <LiveTv /> },
      { name: "New", icon: <Home /> },
      { name: "Muvies", icon: <MusicVideo /> },
   ];

   return (
      <>
         <div className="Category_container">
            {categorys.map((item) => {
               return (
                  <Box key={item.name} className="ctgr">
                     <span>{item.name}</span>
                     <div>{item.icon}</div>
                  </Box>
               );
            })}
         </div>
      </>
   );
}

export default Category;
