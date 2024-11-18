import React from "react";
import OnEvent from "../OnEvent";
import EmptyData from "../../../Components/EmptyData";

function OnEventList() {
  // Mock data for demonstration; replace with actual data or props
  const events = [
    {
      name: "Chitwan Football League",
      date: "Upto 25 Aug",
      logo: "https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain",
    },
    {
      name: "Kathmandu Cricket Cup",
      date: "1 Sep - 15 Sep",
      logo: "https://example.com/cricket-logo.png",
    },
  ]; // Replace this with the actual data source

  return (
    <div>
      {events.length === 0 ? (
        <EmptyData />
      ) : (
        events.map((event, index) => <OnEvent key={index} event={event} />)
      )}
    </div>
  );
}

export default OnEventList;
