import React from 'react'
import Tabs from '../components/ui/Tabs'
import Overview from '../components/Overview';
import OverviewChart from '../components/OverviewChart';
import Insights from '../components/Insights';
import Demographic from '../components/Demographic';

const analyticsOverviewContent = <>
  <div className='col-span-8'>
    <OverviewChart />
  </div>
  <div className='col-span-4'>
      <Insights />
  </div>
  <div className='col-span-12'>
      <Demographic />
  </div>
</>

const analyticsTabs = [
  {
    label: 'Overview',
    content: <Overview>{analyticsOverviewContent}</Overview>
  },
  {
    label: 'Reports',
    content: <div className='p-4'>Reports content</div>
  },
  {
    label: 'Demographics',
    content: <div className='p-4'>Demographics content</div>
  },
];

const Analytics = () => {
  return (
    <>
      <Tabs tabs={analyticsTabs}/>
    </>
  )
}

export default Analytics
