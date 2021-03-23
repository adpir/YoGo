import React from "react";

export default function Checkbox(props) {
  return (
    <>
      <button
        className="bg-white rounded shadow max-h-full p-2 text-center"
        // eslint-disable-next-line react/prop-types
        onClick={props.checked}
      >
        <i className="fas fa-check"></i>
      </button>
    </>
  );
}
