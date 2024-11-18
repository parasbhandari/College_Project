import React from "react";
import Banner from "../../../assets/LeagueBanner.png";
import Logo from "../../../assets/LeagueLogo.png";

function EventDetailHeader() {
  return (
    <div className="Header">
      <div className="Banner">
        {/* Banner image */}
        <img src={Banner} alt="Event Banner" />
      </div>
      <div className="Logo">
          <img src={Logo} alt="Event Logo" />
        </div>
    </div>
  );
}

export default EventDetailHeader;
