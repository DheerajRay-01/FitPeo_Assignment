import React from 'react';
import DashBoardNav from './DashboardOverviewSubComponents/DashBoardNav';
import AnatomySection from './DashboardOverviewSubComponents/AnatomySection';
import HealthStatusCards  from './DashboardOverviewSubComponents/HealthStatusCards';

function DashboardOverview ({HealthStatusCardsData}) {
  return (
    <div className="dashboard h-fit bg-base-600 w-full bg-blue-100 rounded-2xl mt-2">
      {/* Navbar */}
      <DashBoardNav />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 p-2 ">
        
        {/* Left Section: Body Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center rounded-3xl ">
          <AnatomySection />
        </div>

        {/* Right Section: Dashboard Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 overflow-y-auto ">
          {HealthStatusCardsData.map((data, index) => (
            <HealthStatusCards  key={index} data={data} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default DashboardOverview ;
  