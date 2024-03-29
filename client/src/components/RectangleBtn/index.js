/* eslint-disable react/prop-types */
import React from "react";

function RectangleBtn(props) {
  return (
    <>
      <button
        type={props.type}
        className="flex-grow w-full mx-5 py-2 px-4 bg-white border border-gray-400 rounded shadow"
        disabled={props.disabled}
      >
        {props.buttonText}
      </button>
    </>
  );
}
export default RectangleBtn;
