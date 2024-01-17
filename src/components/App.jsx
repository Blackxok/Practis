import Navbar from "./Navbar";
import Category from "./Category";
import Home from "./Home";
import { CatContext } from "./context/context";
import { useState } from "react";

function App() {
   const [giveD, setGiveD] = useState("");
   const giveData = (e) => {
      setGiveD(e);
   };

   return (
      <div>
         <CatContext.Provider value={giveD}>
            <Navbar />
            <Category giveData={giveData} />
            <Home />
         </CatContext.Provider>
      </div>
   );
}

export default App;
