import React from 'react';
import HomeGrid from './HomeGrid';

const NewsPage = () => {
  return (
    <div
      style={{
        height: '110vh', width: '100%',
        overflow: 'hidden', 
      }}
      className="relative bg-gradient-to-r from-blue-900 via-black to-blue-950 "
    >
      <div>
        <HomeGrid />
      </div>
    </div>
  );
};

export default NewsPage;
