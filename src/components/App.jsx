import Navbar from "./Navbar";
import Category from "./Category";
import Home from "./Home";
<<<<<<< HEAD
=======
import { CatContext } from "./context/context";
import { useState } from "react";
>>>>>>> a85e31c2e70ca230b407004ffcbbacab6d14d07a

function App() {
   const [giveD, setGiveD] = useState("");
   const giveData = (e) => {
      setGiveD(e);
   };


   return (
      <div>
<<<<<<< HEAD
         <Navbar />
         <Category />
         <Home />
=======
         <CatContext.Provider value={giveD}>
            <Navbar />
            <Category giveData={giveData} />
            <Home />
         </CatContext.Provider>
>>>>>>> a85e31c2e70ca230b407004ffcbbacab6d14d07a
      </div>
   );
}

export default App;
