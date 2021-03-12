import React from "react";
  
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import ActivityInfo from "../src/pages/activity-info/index";
import CreateActivity from "../src/pages/create-activity/index";
import CreateOrSelect from "./pages/create-select-activities";

function App() {
  return (
    <BrowserRouter>
      <CreateOrSelect />
      {/* <Navbar />
      <h1 className="text-green-600 font-bold pacifico-title">YoGo</h1> */}
    </BrowserRouter>
  );
}

export default App;
