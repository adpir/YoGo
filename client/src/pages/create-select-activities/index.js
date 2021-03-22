/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Link, useParams } from "react-router-dom";

function CreateOrSelect(props) {
  const { userId } = useParams();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("CreateOrSelect props", props);
    if (props.user.loggedIn) {
      console.log("CreateOrSelect props.user.email", props.user.email);
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
    <div className="h-screen bkrd-7">
      <Navbar />
      <div className="w-full quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <h1 className="pacifico-title text-3xl">Take Care Of Yourself</h1>
        </div>
        {loggedIn ? (
          <div className="relative flex items-center justify-center h-16">
            <Link
              to="/create-activity"
              className="bg-white w-screen mx-20 hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow"
              data-test="create-activity"
            >
              CREATE
            </Link>
          </div>
        ) : (
            ""
          )}

        <div className="relative flex items-center justify-center h-16">
          <Link
            to="/select-activity"
            className="bg-white w-3/4 mx-20 hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow"
            data-test="select-activity"
          >
            SELECT
          </Link>
        </div>
        {loggedIn ? (
          <div className="relative flex items-center justify-center h-16">
            <Link
              to={"/user-schedule"}
              className="bg-white w-screen mx-20 hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow"
              data-test="user-activities"
            >
              USER ACTIVITIES
            </Link>
          </div>
        ) : (
            <small className="relative flex items-center justify-center h-16">
              <Link className="text-blue" to="/">
                Log in to create or view your own activities.
            </Link>
            </small>
          )}
      </div>
      </div>
    </>
  );
}

export default CreateOrSelect;
