import React from 'react'
import CardContainer from '../ui/CardContainer';

const ProfileCard = ({ user }) => {
    return (
      <CardContainer Classname="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-14  pl-10 py-8">
          {/* profile avatar */}
          <div className="w-1/2 lg:w-2/12 h-full rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 text-2xl">?</span>
                <img src='/profile.svg' alt="profile_icon" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
          
          {/* profile details */}
          <div className="w-full flex flex-col items-start gap-4">
            <div className="">
              <div className="flex items-center gap-2">
                <h2 className="text-white text-2xl font-medium">{user.name}</h2>
                <img src={user.verified ? '/verified.svg' : '/not_verified.svg'} alt="verified" className="w-5 h-5" />
              </div>
              <p className="text-gray-400 flex gap-2 text-sm mt-1">{user.title} <span>@{user.company}</span> <img src={user.logo} alt={user.company} className='w-5 h-5 p-1 bg-white rounded-sm object-cover' /></p>
            </div>
            
            <div className='flex md:flex-col justify-between items-center md:items-start h-full'>
              <div>
                <span className="inline-block bg-white text-black text-xs px-2 py-1 rounded">
                  {user.userType}
                </span>
              </div>
              <div className="flex items-center space-x-3 md:mt-4">
                <a href={user.linkedin} className="text-gray-400 hover:text-white">
                  <img src='/linkedin.png' alt="linkedin_icon" className="w-8 h-8" />
                </a>
                <a href={user.twitter} className="text-gray-400 hover:text-white">
                  <img src='/x.svg' alt="twitter_icon" className="w-8 h-8" />
                </a>
                <a href={`mailto:${user.email}`} className="text-gray-400 hover:text-white">
                <img src='/mail.webp' alt="mail_icon" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
      </CardContainer>
    );
  };
  
export default ProfileCard
