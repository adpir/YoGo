import React from "react";
import Navbar from "../../components/Navbar/index";

export default function CreateOrSelect() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-sm quicksand-body">
          <div className="relative flex items-center justify-center h-16">
              <h1 className="pacifico-title">
                  Take Care Of Yourself
              </h1>
          </div>
        <div className="relative flex items-center justify-center h-16">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            CREATE
          </button>
        </div>
        <div className="relative flex items-center justify-center h-16">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            SELECT
          </button>
        </div>
      </div>
    </>
  );
};
