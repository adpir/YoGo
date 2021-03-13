import React from "react";
import Navbar from "../../components/Navbar/index";

export default function CreateActivity() {
  return (
    <>
      <Navbar />
      <div className="quicksand-body w-full max-w-sm">
        <div className="relative flex items-center justify-center h-16">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-screen mx-20 py-2 px-4 border border-gray-400 rounded shadow">
            ACTIVITY NAME
          </button>
        </div>
        <div className="relative flex items-center justify-center h-16">
          <button className="pacifico-title bg-blue-700 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            M
          </button>
          <button className="pacifico-title bg-yellow-400 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            B
          </button>
          <button className="pacifico-title bg-red-300 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            S
          </button>
        </div>
        <div className="relative flex items-center justify-center  m-2">
          <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow">
            Duration
          </p>
        </div>
        <div className="relative flex items-center justify-center  m-2">
          <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow">
            Frequency
          </p>
        </div>
        <div>
          <textarea
            className="border relative rounded flex items-center justify-center m-16 h-40 shadow"
            rows="4"
            cols="30"
          >
            Notes
          </textarea>
        </div>
        <div className="relative flex items-center justify-center  m-2">
          <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-2 px-4 border border-gray-400 rounded shadow">
            CREATE!
          </p>
        </div>
      </div>
    </>
  );
};
