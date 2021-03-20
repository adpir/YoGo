import React from "react";
import Navbar from "../../components/Navbar";
import SaveTheDay from "../../components/SaveTheDay";

export default function Today(props) {
  return (
    <>
      <Navbar />
      <section className="w-full max-w-sm quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <div className="bg-white text-center w-screen mx-16 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            TODAY!! YAY!!!
          </div>
        </div>
        <SaveTheDay />
      </section>
    </>
  );
}
