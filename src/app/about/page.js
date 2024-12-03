"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Page = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <Navbar className="bg-black py-2" />
      <div className='bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-950 relative pt-20 min-h-screen'>
        <h1 className="text-center text-white text-4xl font-bold mt-10">About Me</h1>
        
        <div className="text-center mt-10 ">
          <img
            src="/my.jpg"
            alt="Your Image"
            className="w-60 h-60 mx-auto rounded-full border-4 border-white shadow-lg"
          />
        </div>
        
        <div className="text-center mt-10  text-gray-800 px-6 bg-violet-100 sm:w-3/5 w-2/3 sm:mx-44 mx-auto z-10 rounded-lg shadow-3xl ">

          <p className="text-lg font-medium">
            Hi, I am Yash Vishwakarma, a second-year engineering student with a passion for web development and technology. Welcome to my blog!
          </p>
          <button onClick={() => setReadMore(!readMore)} className="text-blue-500 underline">
            {readMore ? 'Read Less' : 'Read More'}
          </button>
          {readMore && (
            <p className="text-lg font-medium">
              My primary interests lie in web technologies such as React, Next.js, and Three.js. Through this blog, I aim to document my journey, provide useful resources, and connect with like-minded individuals.

Beyond coding, I enjoy experimenting with 3D modeling and learning new skills that expand my creative and technical horizons. I am always eager to improve and believe that sharing knowledge is one of the best ways to grow.

Thank you for visiting, and I hope you find the content here insightful and inspiring. Feel free to connect with me or leave a comment—I’d love to hear from you!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
