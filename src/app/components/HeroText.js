import React from 'react';

const HeroText = () => {
    return (
        
        <div className="absolute bg-gradient-to-r from-pink-300 via-blue-100 to-gray-300 bg-clip-text text-transparent top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 sm:px-8 flex flex-col items-center justify-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Hi,</h1>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-500 via-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-lg brightness-200">
        I am Yash Vishwakarma
    </h3>
    <h5 className='sm:font-light md:font-medium font-extralight'>
        Sharing my journey in web development, design, and beyond
    </h5>
</div>

        
    );
};

export default HeroText;
