import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
      credentials: "same-origin",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(JSON.stringify(data));
    console.log(response);
    return response;
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("http://localhost:3001/api/user", {
      username: user.username,
      email: user.email,
      password: user.password,
    })
      .then((data) => console.log(data))
      .catch((err) => console.log("err", err));
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
