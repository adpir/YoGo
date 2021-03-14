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
import CreateAcct from "./pages/create-account";

function App() {
  return (
    <BrowserRouter>
      {/* <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={SignUp} /> */}
      <Switch>
        <Route path="/activity-info">
          <ActivityInfo />
        </Route>
        <Route path="/create-account">
          <CreateAcct />
        </Route>
        <Route path="/create-activity">
          <CreateActivity />
        </Route>
        <Route path="/create-or-select">
          <CreateOrSelect />
        </Route>
        <Route path="/day-schedule">
          <DaySchedule />
        </Route>
        <Route path="/select-activity">
          <SelectActivity />
        </Route>
        <Route path={["/"]}>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
