"use client";
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar className="bg-black py-2 fixed w-full top-0 left-0 z-50" />

      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800">Contact Me</h1>
          <p className="mt-4 text-lg text-gray-600">I love to hear from you! Please reach out with any questions or feedback.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Information</h2>
          <p className="mt-4 text-lg text-gray-600">You can also reach us through the following methods:</p>
          <div className="mt-8 space-y-4">
            <p className="text-lg text-gray-700">📍 Address: Purushottam Nagar Semra Bhopal, India</p>
            <p className="text-lg text-gray-700">📞 Phone: 94247****</p>
            <p className="text-lg text-gray-700">✉️ Email: yash200vi@gmail.com</p>
          </div>
        </div>

      
      </div>
    </>
  );
}
