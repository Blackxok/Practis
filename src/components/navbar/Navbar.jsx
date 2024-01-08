import React from "react";
import { Stack } from "@mui/material";
import { logo } from "../../constant";

function Navbar() {
   return (
      <Stack>
         <img src={logo} alt="logo" width={150} height={150} />
         <img src="../../assets/8.png" alt="" width={150} height={150} />
      </Stack>
   );
}

export default Navbar;
