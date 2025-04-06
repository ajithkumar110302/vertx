import React from 'react';
import { countries } from '../utils/data';
import CardContainer from './ui/CardContainer';

const CountryIndicators = () => {
  return (
    <CardContainer Classname="rounded-full px-4 py-2 w-fit">
        <ul className="flex space-x-5">
        {countries.map((country, index) => (
            <li
            key={index}
              className={`flex justify-center items-center space-x-2`}
            >
            <span className={`w-3 h-3 rounded-full ${country.color}`}></span>
            <span className="text-xs font-medium">{country.name}</span>
            </li>
        ))}
        </ul>
    </CardContainer>
  );
};

export default CountryIndicators;