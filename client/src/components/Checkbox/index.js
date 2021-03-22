import React from "react";

export default function Checkbox(props) {
  return (
    <>
      <button
        className="justify-center m-1 border border-gray-400 rounded shadow"
        // eslint-disable-next-line react/prop-types
        onClick={props.checked}
      >
        <i className="fas fa-check p-2"></i>
      </button>
    </>
  );
}
