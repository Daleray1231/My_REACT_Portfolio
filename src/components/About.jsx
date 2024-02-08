import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white focus:outline-none"
            style={{ outline: "none" }}
          >
            Hi, I'm Dale.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I am an Independent Freelance Web Application Developer. My expertise lies in Front End Web Development and Features, specializing in Online Marketing through Website Design, Search Engine Optimization (SEO), and Social Media Campaigns.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg"
              style={{ cursor: "pointer" }}
            >
              Work With Me
            </Link>
            <Link
              to="/projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              style={{ cursor: "pointer" }}
            >
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* Image without audio playback */}
          <img
            className="object-cover object-center rounded mt-4"
            alt="hero"
            src="./funny_finn.jpg"
            style={{ borderRadius: '35%'}}
          />
        </div>
      </div>
    </section>
  );
}