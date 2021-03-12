import React from "react";
  
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1 className="text-green-600 font-bold">YoGo</h1>
    </BrowserRouter>
  );
}

export default App;
