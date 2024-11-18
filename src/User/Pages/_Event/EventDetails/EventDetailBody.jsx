import React, { useState } from "react";
import Details from "./Details";
import TieSheet from "./TieSheet";
function EventDetailBody() {
  const [selected, setSelected] = useState("Details");

  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <div className="Body">
      <div className="item">
        <ul>
          <li
            onClick={() => handleClick("Details")}
            className={selected === "Details" ? "active" : ""}
          >
            Details
          </li>
          <li
            onClick={() => handleClick("Match/TieSheet")}
            className={selected === "Match/TieSheet" ? "active" : ""}
          >
            TieSheet
          </li>
        </ul>
      </div>
      {/* Display the selected item */}
      <div className="content">
        {selected === "Details" && <Details />}
        {selected === "Match/TieSheet" && <TieSheet />}
      </div>
    </div>
  );
}

export default EventDetailBody;
