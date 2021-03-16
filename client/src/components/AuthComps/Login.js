import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState({ redirectTo: null });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/user/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        if (res.status === 200) {
          props.updateUser({
            loggedIn: true,
            username: res.data.username,
          });

          setRedirect({ redirectTo: "/" });
        }
      })
      .catch((err) => console.log(err));
  };

  if (redirect.redirectTo) {
    return <Redirect to={{ pathname: redirect.redirectTo }} />;
  } else {
    return (
      <div>
        <h4>Login</h4>
        <form>
          <div>
            <div>
              <label htmlFor="email">email</label>
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                value={user.email}
                onChange={() => handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password: </label>
            </div>
            <div>
              <input
                className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={user.password}
                onChange={() => handleChange}
              />
            </div>
          </div>
          <div>
            <div></div>
            <button onClick={() => handleSubmit} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
