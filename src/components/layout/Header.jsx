import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Extract the current page name from the pathname
  const currentPage = location.pathname
    .split('/')
    .filter(Boolean)
    .pop() || 'Home';

  const buttons= ['Activity', 'Log Out'];
  return (
    <header className="hidden lg:flex justify-between min-w-full h-12 items-center pl-4 shadow-md border-b border-customBorder">
      {/* Dynamic Header Title */}
      <h1 className="text-base font-medium capitalize py-3">{currentPage}</h1>

      {/* Activity and Logout Buttons */}
      <div className="flex items-center">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-base font-medium border-l border-customBorder`}
          >
            {button}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;