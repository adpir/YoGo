import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import api from "../../utils/api";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log("setUser", user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .postUser(user)
      .then((res) => {
        console.log("api postUser data", res.data);
      })
      .catch((err) => console.log("api postUser err", err));
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
