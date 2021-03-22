import React from "react";

export default function Checkbox(props) {
  return (
    <>
      <button
        className="bg-white justify-center m-1 border border-gray-400 rounded shadow w-8 max-h-full"
        // eslint-disable-next-line react/prop-types
        onClick={props.checked}
      >
        <i className="fas fa-check"></i>
      </button>
    </>
  );
}
