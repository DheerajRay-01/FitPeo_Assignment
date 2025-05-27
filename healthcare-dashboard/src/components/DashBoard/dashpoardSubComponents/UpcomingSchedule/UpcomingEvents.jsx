import React from "react";
import CalenderCards from "../../../SimpleAppoinmentCard/SimpleAppointmentCard";

function UpcomingEvents({upcomingEventsData}) {
  return (
    <div>
         {Object.entries(upcomingEventsData).map(([day, events]) => (
        <div key={day} className="mb-2">
         <div className="heading text-md font-semibold text-gray-800 mb-1 mt-2">
        {day}
      </div>
          <div className="flex gap-3 ">
            {events.map((event, idx) => (
              <CalenderCards key={idx} data={event} />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}

export default UpcomingEvents;
