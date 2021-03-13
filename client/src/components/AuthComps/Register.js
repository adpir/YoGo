import axios from "axios";
import React, { useState } from "react";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/user", {
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        if (!res.data.errmsg) {
          // redirect later
          console.log("redirect to login");
        } else {
          // not successfull, add something later for a response
          console.log("uh oh, login failed...");
        }
      })
      .catch((err) => console.log("axios error", err));
  };

  return (
    <div>
      <h4>Signup page for testing</h4>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={(e) => handleChange(e)}
        ></input>
        <hr />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        ></input>
        <hr />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        ></input>
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Sign up!
        </button>
      </form>
    </div>
  );
}
