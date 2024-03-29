/* eslint-disable react/prop-types */
import React from "react";

function CircleButton(props) {
  return (
    <button
      data-id={props.id}
      className="pacifico-title w-16 bg-blue-700 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full"
    >
      {/* TODO: fix the props passing of info here. Currently renders 'Y' unless
      props.activityType is passed a value */}
      {props.activityType
        ? props.activityType.substring(0, 1).toUpperCase()
        : "Y"}
    </button>
  );
}

export default CircleButton;
