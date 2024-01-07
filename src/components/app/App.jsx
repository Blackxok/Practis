import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "..";

function App() {
   return (
      <Box>
         <Routes>
            <Route path="/" element={<Main />} />
         </Routes>
      </Box>
   );
}

export default App;
