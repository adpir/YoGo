import React from "react";
import Navbar from "../../components/Navbar/index";
import { Link } from "react-router-dom";

export default function DaySchedule() {
  return (
    <>
      <Navbar />
      <section className="w-full max-w-sm quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <div className="bg-white text-center w-screen mx-16 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            TODAY IS THE DAY!
          </div>
        </div>
        <Link to="/activity-info" >
          <div className="relative flex items-center justify-center h-16">
            <button className="pacifico-title bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              M
          </button>
            <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow">
              Activity
          </p>
          </div>
        </Link>
        <Link to="/activity-info" >
          <div className="relative flex items-center justify-center h-16">
            <button className="pacifico-title bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              B
          </button>
            <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow">
              Activity
          </p>
          </div>
        </Link>
        <Link to="/activity-info" >
          <div className="relative flex items-center justify-center h-16">
            <button className="pacifico-title bg-red-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              S
          </button>
            <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow">
              Activity
          </p>
          </div>
        </Link>
      </section>
    </>
  );
}
