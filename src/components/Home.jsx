import { useContext, useEffect, useState } from "react";
import { CatContext } from "./context/context";
import { ApiService } from "./server/serverData";

const Home = () => {
   // consts
   const contextD = useContext(CatContext);
   const [getData, setGetData] = useState([]);
   console.log(getData);

   useEffect(() => {
      ApiService.fetching("search").then((data) => setGetData(data));
   }, []);

   // returnS
   return (
      <div className="Home_container">
         <h1>{contextD}</h1>
      </div>
   );
};

export default Home;
