import React from "react";
import { Link } from "react-router-dom";

export default function SaveTheDay(props) {
    function save() {
        console.log("You Saved The Day!!!!!!!!!!!");
        let todaysActivities = {props}
        console.log("todaysActivities: ", todaysActivities);
        console.log("props: ", props);
      }
      
  return (
    <>
      <div className="relative flex items-center justify-center h-16">
        <Link
          to="/today"
          onClick={save}
          className="bg-white w-screen mx-20 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          data-test="user-activities"
        >
          Save The Day!
        </Link>
      </div>
    </>
  );
}
