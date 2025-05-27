import React from 'react';

function HealthStatusCards ({ data }) {
  const { title, image, date, progress, color } = data;

  return (
    <div className="bg-white shadow-md rounded-lg p-2 mb-2 lg:w-[200px] w-full max-w-md">
      <div className="flex items-center space-x-4 mb-1">
        <img src={image} alt={title} className="w-10 h-10 object-cover rounded-full" />
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <progress className={`progress ${color} w-full`} value={progress} max="100"></progress>
    </div>
  );
}

export default HealthStatusCards ;
