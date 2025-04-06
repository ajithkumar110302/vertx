import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chartData } from '../utils/data';
import { metricsConfig } from '../utils/data';

const DarkLineChart = ({ selectedMetrics, selectedDate = 'Last 30 Days' }) => {
  // Filter data based on selected date
  const getFilteredData = () => {
    let filteredData = [...chartData];
    
    switch(selectedDate) {
      case 'Today':
        // Return only the most recent data point
        return [chartData[chartData.length - 1]];
      case 'Yesterday':
        // Return the second most recent data point
        return [chartData[chartData.length - 2]];
      case 'This week':
        // Return data from the last 7 days
        return chartData.slice(-7);
      case 'Last week':
        // Return data from 7-14 days ago
        return chartData.slice(-14, -7);
      case 'Last 7 Days':
        // Return data from the last 7 days
        return chartData.slice(-7);
      case 'Last 30 Days':
      default:
        // Return all data
        return filteredData;
    }
  };

  const displayData = getFilteredData();

  // Function to generate ticks at multiples of 5 for larger datasets
  const generateTicks = () => {
    if (displayData.length <= 7) {
      // For small datasets, show all ticks
      return displayData.map(d => d.date);
    } else {
      // For larger datasets, show ticks at multiples of 5 (Mar 1, Mar 5, Mar 10, etc.)
      const dateSet = new Set();
      displayData.forEach(item => {
        const day = parseInt(item.date.split(' ')[1]);
        if (day === 1 || day % 5 === 0) {
          dateSet.add(item.date);
        }
      });
      return Array.from(dateSet);
    }
  };

  const customTicks = generateTicks();

  return (
    <div style={{ width: '100%', height: 180, background: '#000' }}>
      <ResponsiveContainer>
        <LineChart data={displayData}>
          <XAxis 
            dataKey="date" 
            axisLine={{ stroke: '#444' }} // faint X-axis line
            tick={{ fontSize: 12 }}
            ticks={customTicks}
            tickLine={false} // hide small tick lines
          />
          <YAxis
            axisLine={false} // faint Y-axis line
            tickLine={false} // hide small tick lines
            tick={{ fontSize: 12 }}
            ticks={[200, 400, 800, 1200, 1600, 2000]}
            tickFormatter={(value) => {
                if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
                return value;
              }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#333', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          {selectedMetrics.map((metricKey) => (
            <Line
                type="linear"
                key={metricKey}
                dataKey={metricKey}
                stroke={metricsConfig[metricKey].color}
                strokeWidth={2}
                dot={false}
            />
         ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DarkLineChart;
