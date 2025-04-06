import React from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '../components/ui/Tabs';
import Overview from '../components/Overview';
import { profiles } from '../utils/data';
import ProfileCard from '../components/Profile/ProfileCard';
import StatsCard from '../components/Profile/StatsCard';

const ProfileOverviewContent = ({ userData }) => {
  if (!userData) {
    return <div>User not found</div>;
  }

  const { foundedCompanies, experience } = userData;

  return (
    <>
      <div className='col-span-12'>
        <ProfileCard user={userData} />
      </div>
      <div className='col-span-6'>
        <StatsCard 
          title={foundedCompanies.title} 
          count={foundedCompanies.count} 
          items={foundedCompanies.items} 
        />
      </div>
      <div className='col-span-6'>
        <StatsCard 
          title={experience.title} 
          count={experience.count} 
          items={experience.items} 
        />
      </div>
    </>
  );
};

const ProfileDetails = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const userData = profiles.find((profile) => profile.id === parseInt(id)); // Find the user by ID

  const profileTabs = [
    {
      label: 'Overview',
      content: <Overview><ProfileOverviewContent userData={userData} /></Overview>,
    },
    {
      label: 'Portfolio',
      content: <div className='p-4'>Portfolio content</div>,
    },
    {
      label: 'Experience',
      content: <div className='p-4'>Experience content</div>,
    },
    {
      label: 'Media',
      content: <div className='p-4'>Media content</div>,
    },
  ];

  return (
    <>
      <Tabs tabs={profileTabs} />
    </>
  );
};

export default ProfileDetails;