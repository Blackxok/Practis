import { Card, CardMedia } from "@mui/material";
import React from "react";

function VideoCard({ vdata }) {
   //    console.log(V_data);

   return (
      <Card className="VideoCard_container">
         <CardMedia
            image={vdata?.snippet?.thumbnails?.high?.url}
            alt={vdata?.snippet?.title}
            className="CardMedia"
         />
      </Card>
   );
}

export default VideoCard;
