import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../data";
import nextButtonImage from "../slider_images/next_slide.png";
import prevButtonImage from "../slider_images/last_slide.png";
import "../../src/Projects.css";

export default function Projects() {
  const containerStyle = {
    width: "65%",
    position: "relative",
  };

  const CustomNextArrow = ({ onClick }) => (
    <img
      src={nextButtonImage}
      alt="Next"
      className="slick-arrow custom-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "35%",
        right: "-50px",
        transform: "translateY(-50%)",
        zIndex: "1",
      }}
    />
  );

  const CustomPrevArrow = ({ onClick }) => (
    <img
      src={prevButtonImage}
      alt="Prev"
      className="slick-arrow custom-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "35%",
        left: "-50px",
        transform: "translateY(-50%)",
        zIndex: "1",
      }}
    />
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40" style={containerStyle}>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 border-b-2 border-indigo-500 pb-2">
          My Projects
        </h1>
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <div key={project.image} className="relative">
              <Link to={project.link} className="sm:w-1/2 w-100 p-4 h-full">
                <div className="flex relative h-full">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                    style={{
                      width: "80%", // Adjust the width percentage as needed
                      height: "100%",
                      objectFit: "cover",
                      border: "3px solid #312e81",
                      padding: "10px",
                      margin: "auto", // Center the image
                    }}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 flex flex-col justify-center items-center h-full" style={{ width: "100%" }}>
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
                    <p className="leading-relaxed mb-4 absolute bottom-0 left-0 right-0 text-center">
                      {project.description}
                    </p>
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
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <p style={{ textAlign: "center", fontSize: "16px", width: "60%", margin: "20px auto", border: "1px solid #6366f1", padding: "10px", borderRadius: "5px" }}>
        Hover over the slide to view the Project Name, Technologies used, and a summary of the Projects function.<br />
        Click on the slide to be directed to the deployed application.
      </p>
    </section>
  );
}