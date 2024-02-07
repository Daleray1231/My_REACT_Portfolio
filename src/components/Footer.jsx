import React from "react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 fixed bottom-0 w-full z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mx-auto md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/Daleray1231" className="mr-5 hover:text-white">
            <img
              src="./icons8-github-32.png"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a href="https://www.linkedin.com/in/dale-haynie-3b66142a7/" className="mr-5 hover:text-white">
            <img
              src="./icons8-linkedin-26.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a href="https://stackoverflow.com/users/23241705/dale-haynie" className="mr-5 hover:text-white">
            <img
              src="./icons8-stack-overflow-50.png"
              alt="Stack Overflow"
              className="w-8 h-8"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
}