import React, { useEffect, useState } from "react";
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
import axios from "axios";

function App() {
  const [userState, setUser] = useState({
    loggedIn: false,
    email: "",
  });

  // pass down into child for access
  const userUpdate = (user) => {
    console.log("updatedUser");
    console.log("user", user);
    setUser(user);
  };

  // log when userState is updated
  useEffect(() => {
    console.log("state2", userState);
  }, [userState]);

  // pass down into child for access
  const getUser = (user) => {
    return user;
  };

  useEffect(() => {
    console.log("useEFfect ran!");
    axios.get("/api/user").then((res) => {
      console.log(res);
      if (res.data.user) {
        console.log("there is a user in session", req.data);

        setUser({ loggedIn: true, email: res.data.user.email });
      } else {
        console.log("no user");

        setUser({ ...userState, loggedIn: false });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => <LoginPage updateUser={userUpdate} />}
      />
      <Route exact path="/register" component={CreateAcct} />
      <Switch>
        <Route path="/activity-info/system/:id" component={ActivityInfo} />
        <Route path="/activity-info/user/:id" component={ActivityInfo} />
        <Route path="/create-account">
          <CreateAcct />
        </Route>
        <Route
          path="/create-activity"
          render={() => <CreateActivity user={userState} />}
        />
        <Route path="/create-or-select">
          <CreateOrSelect user={userState} />
        </Route>
        <Route
          path="/day-schedule/:type"
          user={userState}
          render={() => <DaySchedule />}
        />
        <Route
          path={["/user-schedule", "/user-schedule/:type"]}
          user={userState}
          render={() => <DaySchedule user={userState} />}
        />
        <Route path="/select-activity">
          <SelectActivity />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
