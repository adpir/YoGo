import React from "react";
import Navbar from "../../components/Navbar/index";
import { Link } from "react-router-dom";

export default function CreateOrSelect() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-sm quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <h1 className="pacifico-title">Take Care Of Yourself</h1>
        </div>
        <div className="relative flex items-center justify-center h-16">
          <Link
            to="/create-activity"
            className="bg-white w-screen mx-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            data-test="create-activity"
          >
            CREATE
          </Link>
        </div>
        <div className="relative flex items-center justify-center h-16">
          <Link
            to="/select-activity"
            className="bg-white w-screen mx-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            data-test="select-activity"
          >
            SELECT
          </Link>
        </div>
        <div className="relative flex items-center justify-center h-16">
          <Link
            to="/day-schedule/all"
            className="bg-white w-screen mx-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            data-test="select-activity"
          >
            USER ACTIVITIES
          </Link>
        </div>
      </div>
    </>
  );
}
