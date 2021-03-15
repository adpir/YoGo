import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CircleButton from "../../components/CircleButton";
import Navbar from "../../components/Navbar/index";
import api from "../../utils/api";

export default function ActivityInfo() {
  const [activity, setActivity] = useState({});
  const { id } = useParams();
  useEffect(() => {
    api
      .getSystemActivityById(id)
      .then((data) => {
        console.log("activity info data", data);
        setActivity(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <section className="w-full max-w-sm">
        <div className="relative flex items-center justify-center h-16">
          <CircleButton activityType={activity.type} />
          <p
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-screen mx-20 py-2 px-4 border border-gray-400 rounded shadow"
            data-test="activity-info-name"
          >
            {activity.name}
          </p>
        </div>
        <div className="relative flex items-center justify-center h-16"></div>
        <div className="relative flex items-center justify-center  m-2">
          <label
            className="relative flex items-center justify-center"
            htmlFor="duration"
          >
            Duration
          </label>
          <p
            className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow"
            data-test="activity-duration-value"
          >
            {activity.durationMinutes}m
          </p>
        </div>
        <div>
          <p
            className="border relative rounded flex items-center justify-center m-16 h-40 shadow"
            rows="4"
            cols="50"
            id="description"
            data-test="activity-info-description"
          >
            {activity.description}
          </p>
        </div>
      </section>
    </>
  );
}
