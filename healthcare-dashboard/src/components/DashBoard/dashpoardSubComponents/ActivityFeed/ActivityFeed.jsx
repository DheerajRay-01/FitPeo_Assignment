import React from 'react';
import ActivityBarChart from './ActivityFeedSubComponents/ActivityBarChart';

function ActivityFeed() {
  return (
    <div className='w-full bg-blue-100 rounded-2xl p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold text-gray-800'>Activity</h2>
        <p className='text-sm text-gray-500'>Weekly Overview</p> {/* Change the text as needed */}
      </div>
      <div className="activityChart overflow-x-scroll">
      <ActivityBarChart />
      </div>
    </div>
  );
}

export default ActivityFeed;
