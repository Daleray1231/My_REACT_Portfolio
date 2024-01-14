import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../data";

export default function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const containerStyle = {
    width: "50%", // Adjust the width as needed (e.g., "50%" for half the size)
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={containerStyle}>
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Hover to display Project Title, Tech used, Why this app?
          </p>
        </div>
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <div key={project.image}>
              <a href={project.link} className="sm:w-1/2 w-100 p-4 h-full">
                <div className="flex relative h-full">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                    style={{
                      height: "100%",
                      border: "2px solid #34D399", // Thin green border
                    }}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 flex flex-col justify-between h-full">
                    <div>
                      <h2
                        className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 flex flex-wrap"
                        dangerouslySetInnerHTML={{ __html: project.subtitle }}
                        style={{
                          gap: "0.5rem",
                          flexBasis: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0.25rem",
                        }}
                      ></h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                    </div>
                    <p className="leading-relaxed">
                      {project.description} <br /><br />
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-green-500 py-1 px-2 rounded-md"
                        >
                          GitHub Repository
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
