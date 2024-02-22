import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./constants/index";
import "./index.css";
import Probnik from "./Probnik";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         {/* <App /> */}
         <Probnik />
      </BrowserRouter>
   </React.StrictMode>
);
