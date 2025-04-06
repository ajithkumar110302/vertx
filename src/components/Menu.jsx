import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../utils/data';

const Menu = () => {
  return (
    <ul className="space-y-2 p-2 h-full">
      {menuItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 font-medium ${
                isActive ? 'text-primary' : 'text-secondary'
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;