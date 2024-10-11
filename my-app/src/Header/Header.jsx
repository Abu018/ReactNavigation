import React, { useState } from "react";
import "./../index.css";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVersionDropdownOpen, setIsVersionDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleVersionDropdown = () => {
    setIsVersionDropdownOpen(!isVersionDropdownOpen);
  };

  const versionOptions = ["6.x", "5.x", "4.x", "3.x", "2.x", "1.x"];
  const versionOpt = [
    { name: "Issues", logo: "/external-link.png" },
    { name: "Feature Request", logo: "/external-link.png" },
    { name: "Reactiflux Discord", logo: "/external-link.png" },
    { name: "Stack Overflow", logo: "/external-link.png" },
    { name: "Troubleshooting" },
    { name: "Contributing" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 shadow text-xl space-x-4">
      <img src="/menu.svg" className="w-6 h-6 mdd:hidden mr-2" />

      {/* Section to center the logo and title for screens below 996px */}
      <div className="flex items-center mdd:hidden justify-center w-full">
        <img
          src="/gppZ606-_400x400.png"
          className="w-8 h-8 rounded-full"
          alt="Logo"
        />
        <h1 className="font-semibold text-black text-sm font-semi-bold sm:text-sm md:text-sm lg:text-sm xl:text-sm ml-2">
          React Navigation
        </h1>
        <img
          src="/search.svg"
          className="absolute right-0 w-6 h-8 mr-4"
          alt="Search Icon"
        />{" "}
      </div>

      {/* Content visible only on screens larger than 996px */}
      <div className="hidden mdd:flex items-center justify-between w-full">
        <div className="flex items-center space-x-4 md:space-x-6 justify-center">
          <img
            src="/gppZ606-_400x400.png"
            className="w-10 h-10 rounded-full"
            alt="Logo"
          />
          <h1 className="font-semibold text-black text-lg lg:text-lg xl:text-lg">
            React Navigation
          </h1>
        </div>

        <ul className="flex space-x-6 items-center md:space-x-8 font-semibold text-black mt-2">
          {" "}
          {/* Added mt-2 to move down */}
          <li className="relative">
            <button
              onClick={toggleVersionDropdown}
              className="hover:text-blue-500 transition duration-200 flex items-center text-medium"
            >
              <span className="text-md">6.x</span>
              <img
                src="/2.png"
                className="w-4 h-4 ml-1 transform translate-y-1"
                alt="Down Arrow"
              />
            </button>
            {isVersionDropdownOpen && (
              <ul className="absolute border border-gray-200 mt-2 shadow-lg w-40">
                {versionOptions.map((version, index) => (
                  <li key={index}>
                    <a
                      href={`#${version.replace(".", "")}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition duration-200 text-lg"
                    >
                      {version}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              href="#docs"
              className="hover:text-blue-500  items-center transition duration-200 text-md"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="#support"
              className="hover:text-blue-500 items-center transition duration-200 text-md"
            >
              Blog
            </a>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-500 transition duration-200 flex items-center text-medium"
            >
              <span className="text-md items-center">Help</span>
              <img
                src="/2.png"
                className="w-4 h-4 ml-1 transform translate-y-1"
                alt="Down Arrow"
              />
            </button>
            {isDropdownOpen && (
              <ul className="absolute border border-gray-200 mt-2 shadow-lg w-40">
                {versionOpt.map((option, index) => (
                  <li key={index} className="flex items-center">
                    <a
                      href={`#${option.name.replace(".", "")}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition duration-200 text-lg w-full"
                    >
                      {option.name}
                    </a>
                    {option.logo && (
                      <img
                        src={option.logo}
                        alt={option.name}
                        className="w-4 h-4 ml-2"
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <div className="flex items-center space-x-4 md:space-x-6 px-2 md:px-10 ml-4 -mt-4 md:-mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                className="w-6 h-6 items-center"
                alt="GitHub"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img src="twitter.png" className="w-6 h-6" alt="Twitter" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img src="light.png" className="w-6 h-6" alt="LinkedIn" />
            </a>
          </div>
          <div className="relative flex items-center p-2 rounded-lg shadow-inner max-w-xs">
            <img
              src="search.svg"
              className=" items-center absolute left-2 top-3 w-5 h-5 text-gray-500 stroke-2"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Search"
              className=" items-center pl-10 p-2 border-none bg-transparent text-sm text-gray-500 focus:outline-none"
            />
            <div className="flex items-center space-x-1 ml-auto">
              <div className="bg-gray-200 px-1 py-0.5 rounded-md text-xs text-gray-600 shadow">
                CTRL
              </div>
              <div className="bg-gray-200 px-1 py-0.5 rounded-md text-xs text-gray-600 shadow">
                K
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};
