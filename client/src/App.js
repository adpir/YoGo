import React from "react";
  
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import ActivityInfo from "../src/pages/activity-info/index";

function App() {
  return (
    <BrowserRouter>
      <ActivityInfo />
      {/* <Navbar />
      <h1 className="text-green-600 font-bold pacifico-title">YoGo</h1> */}
    </BrowserRouter>
  );
}

export default App;
