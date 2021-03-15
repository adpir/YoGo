/* eslint-disable react/prop-types */
import React from "react";

function CircleButton(props) {
  return (
    <button className="pacifico-title bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      {props.activityType.substring(0, 1).toUpperCase()}
    </button>
  );
}

export default CircleButton;
