import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#5b4b92] text-white p-6">
      <div className="mb-4 text-center">
        <p className="text-base sm:text-lg md:text-xl">
          React Navigation is built by <strong>Expo</strong>,{" "}
          <strong>Software Mansion</strong>, and <strong>Callstack</strong>,
          with contributions from the <strong>community</strong> and{" "}
          <strong>sponsors</strong>:
        </p>
        <div className="flex flex-wrap justify-center mt-3">
          {/* Updated image size for responsiveness */}
          {[
            "/001.jpeg",
            "/002.jpeg",
            "/003.jpeg",
            "/004.jpeg",
            "/005.jpeg",
            "/006.jpeg",
            "/007.jpeg",
            "/008.jpg",
          ].map((src, index) => (
            <img
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover mx-2 mb-2"
              src={src}
              alt={`Sponsor ${index + 1}`}
            />
          ))}
        </div>
        <p className="mt-4 text-sm sm:text-base md:text-lg">
          If React Navigation is helpful to you, consider{" "}
          <a
            href="https://reactnavigation.org/support"
            className="underline hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            supporting the project by sponsoring it
          </a>{" "}
          💜
        </p>
      </div>
    </footer>
  );
};
