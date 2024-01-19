import React, { useEffect } from "react";
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
import { useState } from "react";

function Category({ giveData }) {
   // CATEGORYS
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
   // CATEGORYS

   // SELECTED CATEGORY
   const [selectC, setSelectC] = useState(categorys[0].name);

   // SENDING VALUE
   useEffect(() => {
      giveData(selectC);
   }, [selectC]);

   // COMPONENT RETURN
   return (
      <div className="Category_container">
         {categorys.map((item) => (
            <button
               key={item.name}
               className={`ctgr ${selectC === item.name && "active"}`}
               onClick={() => {
                  setSelectC(item.name);
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
