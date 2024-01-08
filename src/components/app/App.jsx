import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "../index";
import Navbar from "../navbar/Navbar";

function App() {
   return (
      <Box>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </Box>
   );
}

export default App;
