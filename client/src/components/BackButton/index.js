import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export default function BackButton() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn && (
        <button
          className="quicksand-body text-gray-600 hover:text-gray-400 hover:underline font-bold"
          onClick={() => history.goBack()}
        >
          &#8249; Go Back
        </button>
      )}
    </div>
  );
};
