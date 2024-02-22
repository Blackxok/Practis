import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import VideoCard from "./VideoCard";
import { Box, Stack } from "@mui/material";

function Videos({ APIdata }) {
<<<<<<< HEAD
=======
   const [filteredData, setFilteredData] = useState([]);

   useEffect(() => {
      const filteredVideos = APIdata.filter((item) =>
         item.snippet.title.toLowerCase().includes("".toLowerCase())
      );
      setFilteredData(filteredVideos);
   }, [APIdata]);

>>>>>>> 34291e2ad7840fa9211cebb69ece55da4c029c45
   return (
      <Stack className={"Videos_Container"}>
         {filteredData.map((item) => (
            <Box key={uuidv4()} className="item_Box">
               <VideoCard vdata={item} />
            </Box>
         ))}
      </Stack>
   );
}

export default Videos;
