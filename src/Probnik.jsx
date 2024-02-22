import React, { useEffect } from "react";

const Probnik = () => {
   const A = ["bir", "ikki", "uch", "tor"];

   useEffect(() => {
      A.map((e) => {
         console.log(e);
      });
      console.log("out");
   }, []);

   return (
      <div>
         <h1>Working</h1>
      </div>
   );
};

export default Probnik;
