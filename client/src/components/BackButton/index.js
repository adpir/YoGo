import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export default function BackButton() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="inline-flex">
      {!loggedIn && (
        <button
          className="quicksand-body text-gray-600 hover:text-gray-400 hover:underline font-bold"
          onClick={() => history.goBack()}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
    </div>
  );
};
