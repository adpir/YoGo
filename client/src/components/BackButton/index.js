import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export default function BackButton() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="inline-flex">
      {!loggedIn && (
        <button
          className="quicksand-body text-gray-500 text-2xl hover:text-gray-400 hover:underline font-bold p-2"
          onClick={() => history.goBack()}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
    </div>
  );
};
