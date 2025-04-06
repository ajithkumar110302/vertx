import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Tab Headers */}
      <div className="h-12 flex justify-between lg:justify-start items-center border-b border-customBorder px-4 lg:px-0">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-3 font-medium lg:border-r border-customBorder ${
              activeTab === index
                ? 'text-primary border-b-2 border-white lg:border-b-0 lg:border-customBorder'
                : 'text-secondary'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        <button
          key="more"
          className="hidden lg:block px-[34px] py-3 font-medium text-primary border-l border-customBorder ml-auto"
        >
          More
        </button>
      </div>

      {/* Tab Content */}
      <div className='w-full h-full'>
        {tabs[activeTab] && <>{tabs[activeTab].content}</>}
      </div>
    </>
  );
};

export default Tabs;