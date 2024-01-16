import React, { useEffect, useRef } from "react";

export default function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current.focus();
  }, []);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            ref={headingRef}
            tabIndex="-1"
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white focus:outline-none"
            style={{ outline: "none" }} // This inline style removes the focus outline
          >
            Hi, I'm Dale.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed" style={{ textIndent: '1em' }}>I am an aspiring developer ready to make my mark in the tech industry. Currently my expertise lies in front end web applications or as Full Stack development team member. I'm constantly researching new tech and starting new projects to get as much exposure as I can. My tuned ambition and perseverance help me to always maintain my vision and reach my desired goals. Coming to you with over a decade in customer service skills, and a variety of technical skills, I believe I would be a great asset to any development team.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./funny_finn.jpg"
            style={{ borderRadius: '35%' }}
          />
        </div>
      </div>
    </section>
  );
}
