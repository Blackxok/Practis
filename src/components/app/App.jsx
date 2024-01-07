import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home, Channel } from "../index";

function App() {
   return (
      <Box>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/channel" element={<Channel />} />
         </Routes>
      </Box>
   );
}

export default App;
