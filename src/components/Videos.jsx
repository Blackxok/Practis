import { Box, Stack } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import VideoCard from "./VideoCard";

function Videos({ APIdata }) {
   // console.log(APIdata);

   return (
      <Stack className={"Videos_Container"}>
         {APIdata.map((item) => (
            <Box key={uuidv4()} className="item_Box">
               <VideoCard vdata={item} />
            </Box>
         ))}
      </Stack>
   );
}

export default Videos;
