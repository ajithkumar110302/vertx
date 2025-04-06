import React from 'react';
import Avatar from '../ui/Avatar';
import { profiles } from '../../utils/data';
import { NavLink } from 'react-router-dom';

const ProfileList = () => {
  return (
    <div className='flex flex-col justify-between'>
      <ul>
        {profiles.map((item, index) => (
          <li key={index} className='flex items-center justify-between border-b border-customBorder'>
            <NavLink
              to={`/profile/${item.id}`}
              className={({ isActive }) =>
                `p-2 ${isActive ? 'bg-secondary' : ''}`
              }
            >
              <Avatar
                image={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                showOnlineStatus={true}
              />
            </NavLink>
          </li>
        ))}
      </ul>
      {/* add profile */}
      <button className='p-1 text-3xl border-t border-customBorder'>+</button>
    </div>
  );
};

export default ProfileList;