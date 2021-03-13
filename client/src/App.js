import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import CircleButton from "./components/CircleButton";
import RectangleBtn from "./components/RectangleBtn";
import ActivityInfo from "../src/pages/activity-info/index";
import CreateActivity from "../src/pages/create-activity/index";
import CreateOrSelect from "./pages/create-select-activities";
import DaySchedule from "./pages/day-schedule/index";
import LoginPage from "./pages/login-create-acct/index";
import SelectActivity from "./pages/select-activity";
import SignUp from "../src/components/AuthComps/Register";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;
