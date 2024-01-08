import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "../index";

function App() {
   return (
      <Box>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </Box>
   );
}

export default App;
