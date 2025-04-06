import React, { useState } from 'react'
import CardContainer from './ui/CardContainer'
import OutlineButton from './ui/OutlineButton'
import { insightsOptions, days, metricsConfig  } from '../utils/data'
import HighlightValue from './ui/HighlightValue'
import DarkLineChart from './DarkLinechart'


const OverviewChart = () => {
  const [selectedDate, setSelectedDate] = useState(days[days.length-1]);
  const [selectedMetrics, setSelectedMetrics] = useState([insightsOptions[0].toLowerCase()]); // default

  const handlePrimaryMetricChange = (metric) => {
    const metricLower = metric.toLowerCase();
    setSelectedMetrics([metricLower]);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const handleAddMetric = (metric) => {
    metric = metric.toLowerCase(); // Convert to lowercase
    if (selectedMetrics.includes(metric)) {
      setSelectedMetrics(selectedMetrics.filter(m => m !== metric));
    } else {
      setSelectedMetrics([...selectedMetrics, metric]);
    }
  }

  return (
    <CardContainer Classname="flex flex-col  space-y-4">
      <div className='flex space-x-2'>
        <OutlineButton 
          value={insightsOptions[0]} 
          options={insightsOptions} 
          handleAddMetric={handlePrimaryMetricChange} 
        />
        <OutlineButton 
          value={selectedDate} 
          options={days} 
          handleAddMetric={handleDateChange}
        />
        <OutlineButton 
          value="+ Add" 
          options={insightsOptions} 
          handleAddMetric={handleAddMetric} 
          width="min-w-[75px]" 
          borderStyle='border-dashed'
        />
      </div>
      <ul className='flex flex-wrap gap-4 my-2 sm:space-x-4'>
      {
        selectedMetrics.map((metric, index) => {
          const highlightData = metricsConfig[metric];
          return (
            <li 
              key={index} 
              className={`flex items-center ${index !== 0 && "border-l border-customBorder pl-1 space-x-2"} sm:pl-2 sm:space-x-4`}
            >
              {index !== 0 && 
                <span
                  className={`w-2 h-2 rounded-full sm:w-3 sm:h-3`}
                  style={{ backgroundColor: highlightData.color }}
                ></span>
              }
              <HighlightValue
                key={index}
                count={highlightData.count}
                growth={highlightData.growth}
                loss={highlightData.loss}
              />
            </li>
          );
        })
      }
    </ul>
    <DarkLineChart selectedMetrics={selectedMetrics} selectedDate={selectedDate}/>
    </CardContainer>
  )
}

export default OverviewChart
