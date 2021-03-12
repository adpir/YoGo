import React from "react";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-sm quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <h1 className="pacifico-title">Take Care Of Yourself...</h1>
        </div>
        <div className="relative flex items-center justify-center h-16">
          <button className="bg-white w-screen mx-5 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            LOGIN
          </button>
        </div>
        <div className="relative flex items-center justify-center h-16">
          <button className="bg-white w-screen mx-5 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
}
