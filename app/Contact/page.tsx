// pages/contact.js

import React from 'react';
import Footer from '../Footer/page';


const ContactPage = () => {
  return (
    <div>
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left side with form */}
        <div className="w-full md:w-1/2 px-6 py-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6">Please fill out the form below to get in touch with us:</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="border rounded-md px-4 py-2 w-full"
                id="name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="border rounded-md px-4 py-2 w-full"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                className="border rounded-md px-4 py-2 w-full"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          
        </div>
        

        {/* Right side with contact information */}
        <div className="w-full md:w-1/2 bg-black py-8 px-6">
          <h2 className="text-white text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-white mb-4">
            Email: <a href="mailto:as4589259">SnapRide@gmail.com</a>
          </p>
          <p className="text-white mb-4">Phone: +91 1234567890</p>
          <p className='text-white'>Address: Snap Ride India Pvt. Ltd.</p>
          <p className='text-white'>10, Nehru Road</p>
          <p className='text-white'>Bangalore, Mumbai, 400008</p>
          <p className='text-white'>India</p>
          
        </div>
        
      </div>
      
    </div>
    <Footer/>
    </div>
  );
 
};

export default ContactPage;
