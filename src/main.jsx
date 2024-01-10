import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { App } from "./components/index";
=======
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";
>>>>>>> 24f0ae78b12c5dfe1c5a3da5b5215b3b32afa07a
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
<<<<<<< HEAD
      <App />
=======
      <BrowserRouter>
         <App />
      </BrowserRouter>
>>>>>>> 24f0ae78b12c5dfe1c5a3da5b5215b3b32afa07a
   </React.StrictMode>
);
