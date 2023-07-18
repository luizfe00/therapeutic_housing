import React from 'react';
import ResidentList from '../components/ResidentList/ResidentList';

const Home = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-8">
        <ResidentList />
        <ResidentList />
        <ResidentList />
      </div>
    </div>
  );
};

export default Home;
