import { useContext, useEffect, useState } from "react";
import { CatContext } from "./context/context";
import { ApiService } from "./server/serverData";
import Videos from "./Videos";
import { LinearProgress } from "@mui/material";

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
      <>
         {!APIdata.length && <LinearProgress className="loader" />}
         <div className="Home_container">
            <h1 className="home_title">{contextD}</h1>
            <Videos APIdata={APIdata} />
         </div>
      </>
   );
};

export default Home;
