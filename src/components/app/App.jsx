import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channel, Main } from "..";

function App() {
   return (
      <Box>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/" element={<Channel />} />
         </Routes>
      </Box>
   );
}

export default App;
