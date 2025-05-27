import React from 'react'
import DashboardOverview from './dashpoardSubComponents/DashboardOverview/DashboardOverview'
import CalendarView from './dashpoardSubComponents/CalendarView/CalendarView'
import calendarData from '../../Data/calendarData'
import upcomingEventsData from '../../Data/upcomingEvents'
import HealthStatusCardsData from '../../Data/HealthStatusCardsData'
import ActivityFeed from './dashpoardSubComponents/ActivityFeed/ActivityFeed'



function DashboardMainContent() {
  return (
    <div className='flex w-full flex-col lg:flex-row p-2 gap-4'>
       <div className="flex w-full flex-col h-fit gap-2"> 
        <DashboardOverview HealthStatusCardsData={HealthStatusCardsData}/>
        <ActivityFeed/>
       </div>

        <CalendarView calendarData={calendarData} upcomingEventsData={upcomingEventsData}/>


    </div>
  )
}

export default DashboardMainContent