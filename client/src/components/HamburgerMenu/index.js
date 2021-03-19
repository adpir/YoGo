import React from "react";

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
            <a
              href="/create-activity"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-create-activity"
            >
              Create Activity
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/day-schedule/all"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-todays-activities"
            >
              Todays Activities
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/day-schedule/all"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              data-test="hamburger-my-activity"
            >
              My Activities
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
