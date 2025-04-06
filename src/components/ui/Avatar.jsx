import React from 'react';

const Avatar = ({ image, isOnline, showOnlineStatus }) => {
  const defaultImage = 'https://via.placeholder.com/150'; // Replace with your default image URL

  return (
    <div className="relative inline-block">
      {/* Avatar Image */}
      <img
        src={image || defaultImage}
        alt="Avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      {/* Online/Offline Indicator */}
      {
        showOnlineStatus && 
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${
            isOnline ? 'bg-green' : 'bg-orange'
          }`}
        ></span>
      }
    </div>
  );
};

export default Avatar;