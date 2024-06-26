'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

// SVG path provided
const svgPath = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgwIiB6b29tQW5kUGFuPSJtYWduaWZ5IiB2ZXJzaW9uPSIxLjAiIHZpZXdCYXNlVVJMX3pvb209Im1hZ25pZnlcLzEiIGJvZHk9IiM2NzY3NjciLz4NCjB4MTI4MHg3MjAgem9vbUFuZFBhbj0ibWFnbmlmeSIgcHJlc2VydmVBc3BlcmNoU2hhcmluZz0ieG1lZXRfYW5kX3BhbiIgdmVyc2lvbj0iMS4wIiB2aWV3Qm94PSIwIDAgOTYwIDU0MC4wMDAwMDEiIGhlaWdodD0iNzIwIiBwcmVzZXJ2YVZpZXdpbmdMaW1pdD0ieE1pZFlNSUQgbWVldCIgdmVyc2lvbj0iMS4wIiBzdHlsZT0iZGlzcGxheTpub25lIj4NCjB4MS41ODY3MTk+DQo5NTkuMTEzMjM4MS4wIDANCjk1OS4xMTMzMjgxIDUzOS4xIDAgDQowLjg4NjcxOSAwIDANCjk1OS4xMTMzMjgxIDUzOS4xIDM1OS4xMTMzMjgxIDUzOS4xIFogTSAwLjg4NjcxOSAwIFoiID4NCjAuODg2NzE5IDANCkMgMC44ODY3MTkgMCAwLjk4NjczMTYgMCAzLjMgQyAwLjg4NjcxOSAwLjAgMC40ODg2NzE5IDAgWiIgY2xpcFJ1bGU9Im5vbmV6b2VtZSIvPg0KPC9zdmc+';

// Define the type for trend data used in the LineChart
interface TrendData {
  name: string;
  uv: number;
}

// Define props interface for Card component
interface CardProps {
  title: string;         // Title of the card
  sales: number;         // Total sales amount
  percentage: number;    // Percentage change in sales
  trend: TrendData[];    // Array of data points for trend line chart
}

// Functional component representing a Card with sales information and trend chart
const Card: React.FC<CardProps> = ({ title, sales, percentage, trend }) => {
  // Determine the arrow icon based on percentage change
  const arrowIcon = percentage > 0 ? faArrowUp : faArrowDown;

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 mt-8"
      style={{
        backgroundImage: `url(${svgPath})`, // SVG path as background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header section with title and icon */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={arrowIcon} className={percentage > 0 ? 'text-green-500' : 'text-red-500'} />
          <h2 className="ml-2 text-black font-extrabold text-2xl">{title}</h2>
        </div>
        <div className="text-gray-500">...</div> {/* Placeholder for additional actions */}
      </div>

      {/* Sales information section */}
      <div className="mt-4">
        <div className="text-black font-bold text-3xl">${sales.toLocaleString()}</div> {/* Formatted sales amount */}
        <div className={`flex items-center mt-1 ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          <FontAwesomeIcon icon={arrowIcon} className="mr-1" />
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`} {/* Display percentage change */}
        </div>
        <p className="text-gray-500 mt-2">Sales</p> {/* Sales label */}
      </div>

      {/* Trend chart section - hidden on mobile screens */}
      <div className="mt-4 hidden md:block">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={trend}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Card;
