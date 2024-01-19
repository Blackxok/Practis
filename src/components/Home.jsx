import { useContext, useEffect, useState } from "react";
import { CatContext } from "./context/context";
import { ApiService } from "./server/serverData";
import Videos from "./Videos";

const Home = () => {
   // consts
   const contextD = useContext(CatContext);
   const [APIdata, setAPIdata] = useState([]);
   // console.log(APIdata);

   useEffect(() => {
      ApiService.fetching(`search?part=snippet&q=${contextD}`).then((data) =>
         setAPIdata(data.data.items)
      );
   }, []);

   // returnS
   return (
      <div className="Home_container">
         <h1>{contextD}</h1>
         <Videos APIdata={APIdata} />
      </div>
   );
};

export default Home;
