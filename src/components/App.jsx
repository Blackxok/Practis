import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Home from "./Home";
import { CatContext } from "./context/context";

function App() {

   
   return (
      <div>
         <CatContext.Provider>
            <Navbar />
            <Category />
            <Home />
         </CatContext.Provider>
      </div>
   );
}

export default App;
