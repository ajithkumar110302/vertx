import React from 'react';
import { countries } from '../utils/data';

const CountryProgress = () => {
  return (
    <div className='px-4 pt-4 flex flex-col justify-between'>
      <ul className="space-y-8 border-b border-customBorder pb-6">
        {countries.map((country, index) => (
          <li
            key={index}
            className="flex items-center space-x-4"
          >
            {/* Country Flag */}
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-12 h-8 object-cover rounded"
            />

            {/* Country Info */}
            <div className="flex-1">
              <div className='flex justify-between items-center'>
                {/* Country Name */}
                <h5 className="text-white text-sm font-medium">{country.name}</h5>
                {/* Percentage */}
                <span className="text-white text-sm font-medium">{country.percentage}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                <div
                  className={`h-2 rounded-full ${country.color}`}
                  style={{ width: country.percentage }}
                ></div>
              </div>
            </div>

          </li>
        ))}
      </ul>
      {/* Footer */}
      <p className="text-sm text-primary mt-4 flex items-center justify-end cursor-pointer">
        View all countries <span className="ml-2">&rarr;</span>
      </p>    
    </div>
  );
};

export default CountryProgress;