import Navbar from "./Navbar";
import Category from "./Category";
import Home from "./Home";
import { CatContext } from "./context/context";


function App() {
   return (
      <div>
         <CatContext.Provider value={"hello"}>
            <Navbar />
            <Category />
            <Home />
         </CatContext.Provider>
      </div>
   );
}

export default App;
