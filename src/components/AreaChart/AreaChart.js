'use client'

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data - aap ise apne real data se replace kar sakte hain
const data = [
  { name: 'Jan', users: 4000, revenue: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398 },
  { name: 'Mar', users: 2000, revenue: 9800 },
  { name: 'Apr', users: 2780, revenue: 3908 },
  { name: 'May', users: 1890, revenue: 4800 },
  { name: 'Jun', users: 2390, revenue: 3800 },
];

export default function AreaChart() {
  return (
    // Main container with fixed height
    <div style={{ width: '100%', height: '500px', padding: '20px' }}>
      {/* Chart title */}
      <h2 className="text-2xl font-bold mb-6">Monthly Performance</h2>
      
      {/* Chart container */}
      <div style={{ width: '100%', height: '400px' }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            {/* Grid lines */}
            <CartesianGrid 
              strokeDasharray="3 3" 
              opacity={0.3} 
            />
            
            {/* X and Y axes */}
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#666' }} 
            />
            <YAxis 
              tick={{ fill: '#666' }}
            />
            
            {/* Tooltip and Legend */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Legend />
            
            {/* Data lines */}
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="#8884d8" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Users"
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#82ca9d" 
              strokeWidth={2}
              name="Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}