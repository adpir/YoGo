import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import NavbarSignIn from "../../components/NavbarSignIn";

export default function LoginPage(props) {
  const [userState, setUser] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState({ redirectTo: null });

  const handleChange = (e) => {
    setUser({ ...userState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("login state", userState);
    e.preventDefault();
    axios
      .post("/api/users/login", {
        email: userState.email,
        password: userState.password,
      })
      .then((res) => {
        if (res.status === 200) {
          const parsedRes = JSON.parse(res.config.data);
          console.log(parsedRes);
          props.updateUser({
            loggedIn: true,
            email: parsedRes.email,
          });

          setRedirect({ redirectTo: "/create-or-select" });
        }
      })
      .catch((err) => console.log(err));
  };
  if (redirect.redirectTo) {
    return <Redirect to={redirect.redirectTo} />;
  } else {
    return (
      <>
        <NavbarSignIn />
        <div className="w-full max-w-sm quicksand-body">
          <div className="relative flex items-center justify-center h-16">
            <h1 className="pacifico-title">Take Care Of Yourself...</h1>
          </div>
          <div className="relative flex items-center justify-center h-16">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in
            </h2>
          </div>
          <form
            className="mt-8 space-y-6 m-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  data-test="login-email"
                  value={userState.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  data-test="login-password"
                  value={userState.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  data-test="login-remember"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                data-test="sign-in-button"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: solid/lock-closed --> */}
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center h-16">
            <Link
              to="/create-account"
              className="bg-white w-screen mx-5 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              data-test="create-account"
            >
              CREATE ACCOUNT
            </Link>
          </div>
          <div className="relative flex items-center justify-center h-16">
            <Link
              to="/create-or-select"
              className="bg-white w-screen mx-5 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              data-test="skip-login"
            >
              SKIP LOGIN
            </Link>
          </div>
        </div>
      </>
    );
  }
}
