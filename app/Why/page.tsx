import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import Footer from "../Footer/page";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary text-black " />
    ),
    link: "#",
    description: "At OurCompany, we are committed to offering you the best prices available. Our competitive pricing ensures that you get great value for your money. If you find a lower price elsewhere, let us know, and we'll match it.",
   
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary text-black " />
    ),
    link: "#",
    description: "Our priority is your safety and convenience. With OurCompany, you can expect prompt and reliable service without compromising on safety. We use advanced technology and stringent safety measures to ensure a fast and secure journey for every ride.",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary text-black " />
    ),
    link: "#",
    description: "Our team consists of experienced and professional drivers who prioritize your safety and comfort. With years of expertise, they navigate the roads with precision, ensuring a smooth and enjoyable journey for every passenger.",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:text-white dark:bg-black py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary  duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Services;
