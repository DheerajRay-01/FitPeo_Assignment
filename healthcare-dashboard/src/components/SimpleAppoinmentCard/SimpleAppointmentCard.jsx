import React from 'react'

function CalenderCards({data}) {
const {topic,icon, time, timeTo,doctor,next} = data
  return (
    <div>
    <div className={`rounded-2xl p-1 mb-1 lg:w-[220px] w-full max-w-md shadow-md px-3 ${
  next ? 'bg-blue-500 text-white' : 'bg-blue-100'
}`}>
      <div className="flex items-center justify-between mb-1">
        <div className="text-lg font-semibold">{topic}</div>
        {icon &&<img src={icon} alt={topic} className="w-10 h-10 object-cover rounded-full" />}
      </div>
    <div className={`text-sm mb-1 ${next ? "text-white" : "text-gray-500"}`}>{time} {timeTo && ` - ${timeTo}`}</div>
   {doctor &&   <div className={`text-md mb-1 ${next ? "text-white" : "text-gray-500"}`}>{doctor}</div>}
    </div>
    </div>
  )
}

export default CalenderCards