import {
   Avatar,
   Box,
   Card,
   CardContent,
   CardMedia,
   Stack,
   Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";

function VideoCard({ vdata }) {
   const myArray = vdata?.snippet?.title.split();
   myArray.filter((e) => {
      if (e.includes("E")) {
         console.log(e);
      } else {
         console.log("uups");
      }
   });

   return (
      <Card className="VideoCard_container">
         <CardMedia
            image={vdata?.snippet?.thumbnails?.high?.url}
            alt={vdata?.snippet?.title}
            className="CardMedia"
         />
         <CardContent className="card_content">
            <>
               <Typography className="video_moment">
                  {moment(vdata?.snippet?.publishedAt).from()}
               </Typography>
               <Typography className="video_title">
                  {vdata?.snippet?.title.slice(0, 40)}
               </Typography>
               <Typography className="video_description">
                  {vdata?.snippet?.description.slice(0, 50)}
               </Typography>
            </>
            <>
               <Stack className="chanel_avatar">
                  <Avatar
                     className="ava"
                     src={vdata?.snippet?.thumbnails?.high?.url}
                  />
                  <Box className="chnl_title">
                     {vdata?.snippet?.channelTitle}
                  </Box>
               </Stack>
            </>
         </CardContent>
      </Card>
   );
}

export default VideoCard;
