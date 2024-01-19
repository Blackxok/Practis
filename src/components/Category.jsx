import React from "react";
import {
   Home,
   LiveTv,
   CellTower,
   SportsEsports,
   School,
   FitnessCenter,
   TheaterComedy,
   GraphicEq,
   Checkroom,
   MusicNote,
   Directions,
   Devices,
   Engineering,
   EmojiEmotions,
} from "@mui/icons-material";

function Category() {
   //   data Category
   const categorys = [
      { name: "Live", icon: <CellTower /> },
      { name: "New", icon: <Home /> },
      { name: "Muvies", icon: <LiveTv /> },
      { name: "Gaming", icon: <SportsEsports /> },
      { name: "Education", icon: <School /> },
      { name: "Sport", icon: <FitnessCenter /> },
      { name: "Comedy", icon: <TheaterComedy /> },
      { name: "Podcast", icon: <GraphicEq /> },
      { name: "Fashion", icon: <Checkroom /> },
      { name: "Music", icon: <MusicNote /> },
      { name: "Auto", icon: <Directions /> },
      { name: "Tecno", icon: <Devices /> },
      { name: "Engineer", icon: <Engineering /> },
      { name: "Funny", icon: <EmojiEmotions /> },
   ];
   //   data Category
   // const ceckActive = (e) => {
   //    console.log(e.target);
   // };
   function ceckActive(params) {
      console.log(params);
   }

   return (
      <div className="Category_container">
         {categorys.map((item) => (
            <button
               key={item.name}
               className="ctgr"
               onClick={(ev) => {
                  ceckActive(ev);
               }}
            >
               <span>{item.name}</span>
               <div>{item.icon}</div>
            </button>
         ))}
      </div>
   );
}

export default Category;
