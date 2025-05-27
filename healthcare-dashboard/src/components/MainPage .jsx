import React from 'react';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import DashBoard from './DashBoard/dashpoardSubComponents/DashboardOverview/DashboardOverview';
import DashboardMainContent from './DashBoard/DashboardMainContent';
import CalendarView from './DashBoard/dashpoardSubComponents/CalendarView/CalendarView';

function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
       
        <Header />
       <div className="flex w-full flex-col lg:flex-row">
        <SideBar/>

        <DashboardMainContent/>
      
        
        
      </div>
       
      
      </div>
    </div>
  );
}

export default MainPage;
