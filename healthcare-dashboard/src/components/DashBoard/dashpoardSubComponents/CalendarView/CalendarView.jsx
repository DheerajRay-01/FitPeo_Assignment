import React from "react";
import Calender from "./calendarSubComponents/Calender";
import CalenderCards from "../../../SimpleAppoinmentCard/SimpleAppointmentCard";
import UpcomingEvents from "../UpcomingSchedule/UpcomingEvents";

function CalendarView({calendarData,upcomingEventsData}) {
  return (
    <div className="flex w-fit flex-col items-start">
      <Calender calendarData={calendarData}/> 

      <div className="heading text-lg font-semibold text-gray-800 mb-1 mt-2">
        Today's Appointments
      </div>
        <div className="eventCards p-2 flex gap-2 ">
          {calendarData.map((data, index) =>
            data.appointment ? <CalenderCards key={index} data={data} /> : null
          )}
        </div>

         <div className="heading text-lg font-semibold text-gray-800 mb-1 mt-2">
        Upcoming Schedules
      </div>

      <div className="upcoming">
      <UpcomingEvents upcomingEventsData={upcomingEventsData}/>
      </div>
      
    </div>
  );
}

export default CalendarView;
