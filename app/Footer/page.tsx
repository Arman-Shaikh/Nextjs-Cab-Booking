import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Ride",
  },
  {
    title: "Drive",
  },
  {
    title: "Deliver",
  },
  {
    title: "Snap Ride for Business",
  },
  {
    title: "Snap Ride Freight",
  },
];

const FooterLink1 = [
  {
    title: "Safety",
  },
  {
    title: "Diversity and Inclusion",
  },
  {
    title: "Sustainability",
  },
];

const FooterLinks2 = [
  {
    title: "Reserve",
  },
  {
    title: "Airport",
  },
  {
    title: "Cities",
  },
];

const Footer = () => {
  return (
    <div className="bg-black dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="text-white sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              SNAP RIDE
            </h1>
            <p className=" text-white text-sm">
            We strive to provide top-quality service to our customers. If you have any questions or feedback, feel free to reach out to us.{" "}
            </p>
            <br />
            <div className="text-white flex items-center gap-3">
              <FaLocationArrow />
              <p>Mumbai, Maharashtra</p>
            </div>
            <div className="text-white flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 1234567890</p>
            </div>
            {/* Social Handle */}
            <div className="text-white flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://in.linkedin.com/">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="text-white sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Products
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="text-white sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Global citizenship
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink1.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="text-white sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Travel
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks2.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
