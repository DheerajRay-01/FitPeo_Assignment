import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function ActivityBarChart() {
  const data = [
    { name: 'Mon', heartRate: 72, bp: 120, spo2: 98 },
    { name: 'Tue', heartRate: 75, bp: 118, spo2: 97 },
    { name: 'Wed', heartRate: 70, bp: 122, spo2: 99 },
    { name: 'Thu', heartRate: 73, bp: 119, spo2: 98 },
    { name: 'Fri', heartRate: 78, bp: 121, spo2: 97 },
    { name: 'Sat', heartRate: 69, bp: 117, spo2: 96 },
    { name: 'Sun', heartRate: 71, bp: 120, spo2: 98 },
  ];

  return (
    <div>
      <BarChart width={450} height={200} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar  dataKey="heartRate" fill="#ff6f61" name="Heart Rate (bpm)" />
        <Bar dataKey="bp" fill="#61dafb" name="Blood Pressure (mmHg)" />
        <Bar dataKey="spo2" fill="#82ca9d" name="SpO2 (%)" />
      </BarChart>
    </div>
  )
}

export default ActivityBarChart;
