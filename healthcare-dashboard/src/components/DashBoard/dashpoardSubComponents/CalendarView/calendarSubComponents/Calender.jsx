import React from "react";
// import calendarData from "../../../../../Data/calendarData";
import {MoveRight , MoveLeft } from 'lucide-react'

function Calender({calendarData}) {
  function getRandomTime() {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    return `${paddedHours}:${paddedMinutes}`;
  }

  function getRandomBoolean() {
  return Math.random() < 0.5;
}

  const monthNames = [
   "January","February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


  return (
    <div className="shadow-md w-screen sm:w-fit rounded-2xl">

   <div className="flex justify-between items-center px-4 py-1 mt-2 bg-blue-100 rounded-t-2xl rounded-b-sm mb-1">
  <span className="text-lg font-semibold text-gray-800">May 2025</span>
  <div className="flex gap-4 text-gray-600 ">
    <MoveLeft className="cursor-pointer hover:text-black transition" />
    <MoveRight className="cursor-pointer hover:text-black transition" />
  </div>
</div>

    
    <div className="p-2 flex gap-2 justify-around bg-blue-100 rounded-b-2xl  rounded-t-sm">
      {calendarData.map((day, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-2 w-14 text-center font-sans scroll-auto "
        >
          <span className=" font-semibold text-gray-700">{day.day}</span>
          <span className="text-xl font-bold text-blue-600 my-1 block">
            {day.date}
          </span>

          {[1, 2, 3].map((_, i) => (
            <span
              key={i}
              className={`block my-2  rounded-sm text-sm font-medium ${
                day.time && getRandomBoolean()
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {day.appointment ? day.time  : getRandomTime()}
            </span>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Calender;
