import { useContext } from "react";
import { CatContext } from "./context/context";

const Home = () => {
   const contextD = useContext(CatContext);
   return (
      <div>
         <h1>{contextD}</h1>
      </div>
   );
};

export default Home;
