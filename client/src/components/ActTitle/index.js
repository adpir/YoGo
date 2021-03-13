import React from "react";
import "./style.css";
import ActTitleText from "../ActTitleText";

function ActTitle({  }) {
  return (
    <div className="text-center">
      <ActTitleText activity={activity} />
    </div>
  );
}

export default ActTitle;