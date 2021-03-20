import React from "react";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  return (
    <>
      <button
        className="inline-flex items-center justify-center p-4 rounded-md text-gray-400 ring-4 ring-gray-300 ring-inset"
        type="button"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (hamburgerOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link
              to="/create-activity"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-create-activity"
            >
              Create Activity
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/day-schedule/all"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-todays-activities"
            >
              Todays Activities
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/user-schedule"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-my-activity"
            >
              My Activities
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-team"
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-log-out"
            >
              log-out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
