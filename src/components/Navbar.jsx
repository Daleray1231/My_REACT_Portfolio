import { ArrowRightIcon, DocumentDownloadIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const audioElement = document.createElement("audio");
audioElement.src = "./buff_baby.mp3";

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayStopClick = () => {
    if (isPlaying) {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset audio to beginning
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <header className="bg-indigo-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Play/Stop Button */}
        <button
          onClick={handlePlayStopClick}
          className="text-white bg-indigo-600 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 rounded text-lg mr-3"
        >
          {isPlaying ? "Stop Audio" : "Play Audio"}
        </button>

        <Link to="/about" className="title-font font-medium text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Dale Haynie</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="/projects" className="mr-5 hover:text-white text-white">
            Past Work
          </Link>
          <Link to="/skills" className="mr-5 hover:text-white text-white">
            Skills
          </Link>
          {/* <Link to="/testimonials" className="mr-5 hover:text-white text-white">
            Testimonials
          </Link> */}
          {/* Adjusted resume link */}
          <a
            href="/DaleHaynie_Resume.pdf"
            download="/DaleHaynie_Resume.pdf"
            className="mr-5 hover:text-white text-white flex items-center"
          >
            Resume
            <DocumentDownloadIcon className="w-4 h-4 ml-1" />
          </a>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}
