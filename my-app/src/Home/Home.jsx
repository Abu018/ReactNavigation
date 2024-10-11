import React from "react";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-10 space-y-10 lg:space-y-0 lg:space-x-6">
        {/* Image 1 */}
        <div className="flex-grow">
          <img
            src="./8.png"
            alt="Update"
            className="h-[30vh] sm:h-[50vh] lg:h-[60vh] w-auto hidden lg:block lg:-mt-20"
          />
        </div>

        {/* Text and Button Section */}
        <div
          className="relative border-8 rounded-lg shadow-lg p-6 w-full lg:w-3/6 h-[40vh] sm:h-[50vh] lg:h-[60vh]"
          style={{ borderColor: "#414360", marginTop: "-5rem" }}
        >
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "opacity(0.2)",
            }}
          ></div>

          {/* Text and Button Layer */}
          <div className="relative z-10 w-full h-full text-center p-6 flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#414360]">
              React Navigation
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 font-bold text-lg sm:text-xl lg:text-2xl mb-6">
              Routing and navigation for Expo and React Native apps.
            </p>

            {/* Buttons */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <button className="px-4 py-2 sm:px-6 sm:py-3 border-4 border-gray-600 rounded-md hover:bg-white hover:text-[#414360] transition text-sm sm:text-base lg:text-lg">
                Read Docs
              </button>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#414360] text-white rounded-md hover:bg-blue-600 transition text-sm sm:text-base lg:text-lg">
                Try It
              </button>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex-grow">
          <img
            src="./7.png"
            alt="Left"
            className="h-[30vh] sm:h-[50vh] lg:h-[60vh] w-auto hidden lg:block lg:-mt-20"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#E6EAF8] border border-gray-300 rounded-lg p-4 sm:p-6 flex items-center space-x-2 mt-8 lg:mt-16">
        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
          <span className="text-yellow-500">💡</span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
          Coming from an older version? Check out our{" "}
          <a href="#" className="text-blue-600 font-bold">
            migration guides.
          </a>
        </p>
      </div>
    </div>
  );
};
