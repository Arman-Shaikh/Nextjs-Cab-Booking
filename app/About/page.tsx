import React from "react";
import Footer from "../Footer/page";

const About = () => {
  return (
    <div className="sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
          <img src="./car2.png" 
              alt="Car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up">
              Snap Ride is a user-friendly platform that allows customers to easily book cabs online. Whether they need a ride to the airport, want to explore the city, or require transportation for any other purpose, Snap Ride offers a convenient solution.
              </p>
              <p style={{ fontWeight: 'bold' }}>Variety of Vehicles:</p>
              <p>Snap Ride offers a diverse range of vehicles to cater to different needs and preferences. From standard sedans to luxury cars, customers can choose the option that best suits their requirements.
              </p>
              <p style={{ fontWeight: 'bold' }}>24/7 Customer Support: </p>
              <p>Snap Ride provides round-the-clock customer support to assist customers with any queries or issues they may encounter during the booking process or while using the service.</p>

              
              <button className="bg-black hover:bg-gray-400 text-white py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/> 
    </div>
  );
  
};





export default About;
