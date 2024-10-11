import React from "react";

export const Main = () => {
  return (
    <div
      style={{ backgroundColor: "#25292e", minHeight: "100vh", color: "#fff" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-16 py-16">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="./smile.svg"
            alt="Easy to Use"
            className="w-24 h-24 sm:w-32 sm:h-32 mb-4"
          />
          <p className="pt-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Easy To Use
          </p>
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            Start quickly with built-in navigators that deliver a seamless
            out-of-the-box experience.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="./mob.svg"
            alt="iOS and Android"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Components built for iOS and Android
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            Platform-specific look-and-feel with smooth animations and gestures.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="./star.svg"
            alt="Customizable"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Completely customizable
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            If you know how to write apps using JavaScript, you can customize
            any part of React Navigation.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="./charger.svg"
            alt="Extensible platform"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Extensible platform
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            React Navigation is extensible at every layer—you can write your own
            navigators or even replace the user-facing API.
          </p>
        </div>
      </div>
    </div>
  );
};
