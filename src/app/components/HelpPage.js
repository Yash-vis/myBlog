import React from 'react'

const helpPage = () => {
  return (
    <div style={{
        width: '100%',
        height: '50vh',
        overflowX: 'hidden'}} className='bg-black '>
       <footer className="bg-gray-800 text-white py-6 sm:h-56">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <p className="font-semibold">Contact Us</p>
            <p>Email: yash200vi@gmail.com</p>
            <p>Phone: +91 9424766159</p>
          </div>
          
          <div className="mb-4 sm:mb-0">
            <p className="font-semibold">Follow Us</p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-2">
              <a href="https://github.com/Yash-vis" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                GitHub
              </a>
              <a href="https://www.instagram.com/the_leaflone/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/yashvishwakarma05/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default helpPage
