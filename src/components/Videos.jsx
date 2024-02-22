import { Box, Stack } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import VideoCard from "./VideoCard";

function Videos({ APIdata }) {
   return (
      <Stack className={"Videos_Container"}>
         {APIdata.map((item) => (
            <Box key={uuidv4()} className="item_Box">
               {item?.snippet?.title.filter((e) => {
                  console.log(e);
               })}
               <VideoCard vdata={item} />
            </Box>
         ))}
      </Stack>
   );
}

export default Videos;
