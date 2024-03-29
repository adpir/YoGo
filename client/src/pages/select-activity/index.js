import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function SelectActivity() {
  return (
    <>
      <div className="h-screen bkrd-8">
        <Navbar />
        <div className="w-full quicksand-body">
          <div className="relative flex items-center justify-center h-16">
            <h1 className="pacifico-title text-green-900">Which Type Of Activities Today?</h1>
          </div>
          <Link
            to="/day-schedule/mind"
            className="relative flex items-center justify-center h-16"
          >
            <button
              className="bg-white w-1/2 mx-20 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow"
              data-test="select-mind-activities"
            >
              MIND
          </button>
          </Link>
          <Link
            to="/day-schedule/body"
            className="relative flex items-center justify-center h-16"
          >
            <button
              className="bg-white w-1/2 mx-20 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow"
              data-test="select-body-activities"
            >
              BODY
          </button>
          </Link>
          <Link
            to="/day-schedule/social"
            className="relative flex items-center justify-center h-16"
          >
            <button
              className="bg-white w-1/2 mx-20 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow"
              data-test="select-social-activities"
            >
              SOCIAL
          </button>
          </Link>
          <Link
            to="/day-schedule/all"
            className="relative flex items-center justify-center h-16"
          >
            <button
              className="bg-white w-1/2 mx-20 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow"
              data-test="select-all-activities"
            >
              ALL
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
