import React from 'react';
const TechGrid = () => {
  return (
    <div className="absolute bottom-0 w-full p-6 sm:p-10 sm:mx-auto  sm:my-0 my-3 overflow-hidden mx-auto "> {/* Adjusted margins */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mx-auto justify-center items-center">
        <img
          src="images.webp"
          alt="Grid 1"
          className="w-16 h-16 sm:w-32 sm:h-32 object-cover rounded-full mx-auto"
        />
        <img
          src="3d-logo.png" 
          alt="Grid 2"
          className="w-16 h-16 sm:w-32 sm:h-32 object-cover rounded-full mx-auto"
        />
        <img
          src="python.png" 
          alt="Grid 3"
          className="w-16 h-16 sm:w-32 sm:h-32 object-cover rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default TechGrid;
