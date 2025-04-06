import React from 'react'
import CardContainer from '../ui/CardContainer';

const StatsCard = ({ title, count, items }) => {
    return (
      <CardContainer>
        <h3 className="text-lg mb-3 font-semibold">{title}</h3>
        <div className="text-white text-6xl font-bold mb-6">{count.toString().padStart(2, '0')}</div>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  {item.logo ? (
                    <img src={item.logo} alt={item.name} className="w-5 h-5" />
                  ) : (
                    <div className="w-5 h-5 bg-white rounded"></div>
                  )}
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="text-white text-lg">{item.name}</span>
                    {item.badge && (
                      <span className={`ml-2 text-[10px] px-1.5 rounded-[3px] ${item.badge.color}`}>
                        {item.badge.text}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm">{item.description} {item.location && <strong>{item.location}</strong>}</p>
                  )}
                </div>
              </div>
              
              <a href={item.profileUrl} className="text-xs hover:text-white">
                View Profile
              </a>
            </div>
          ))}
        </div>
      </CardContainer>
    );
  };
  
export default StatsCard
