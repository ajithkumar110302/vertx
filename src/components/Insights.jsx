import React, { useState } from 'react';
import { insights } from '../utils/data';
import HighlightValue from './ui/HighlightValue';
import CardContainer from './ui/CardContainer';
import OutlineButton from './ui/OutlineButton';
import { insightsOptions } from '../utils/data';

const Insights = () => {
  return (
    <CardContainer Classname="flex flex-col justify-between h-full">
      {/* Card Header */}
      <div className='flex justify-between items-center mb-2'>
        <h2 className="text-2xl font-semibold text-white">Insights</h2>
        <OutlineButton value={insightsOptions[0].label} options={insightsOptions}/>
      </div>

      {/* List of Insights */}
      <ul className="flex justify-between lg:flex-col gap-4 pb-2 border-b border-customBorder">
        {insights.map((insight, index) => 
            <li key={index} className="pb-4">
                <h3 className="text-lg font-medium text-white">{insight.title}</h3>
                <HighlightValue count={insight.count} growth={insight.growth} loss={insight.loss} Classname="text-4xl" />
            </li>
        )}
      </ul>

      {/* Footer */}
      <p className="text-sm text-primary mt-4 flex items-center justify-end cursor-pointer">
        View detailed insights <span className="ml-2">&rarr;</span>
      </p>
    </CardContainer>
  );
};

export default Insights;