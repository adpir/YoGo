import React from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  return (
    <>
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 text-2xl"
        type="button"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div
        className={
          "text-center content-center" +
          (hamburgerOpen ? " flex-grow" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link
              to="/create-account"
              className="quicksand-body text-gray-600 hover:bg-green-900 hover:text-white px-3 py-2 rounded-md text-sm"
              data-test="hamburger-create-activity"
            >
              Create Account
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="quicksand-body text-gray-600 hover:bg-green-900 hover:text-white px-3 py-2 rounded-md text-sm"
              data-test="hamburger-todays-activities"
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="quicksand-body text-gray-600 hover:bg-green-900 hover:text-white px-3 py-2 rounded-md text-sm"
              data-test="hamburger-my-activity"
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
