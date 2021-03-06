import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white md:bg-hero-image bg-contain bg-no-repeat dark:bg-gray-800 pt-12">
      <div className="text-center w-full mx-auto py-24 px-4 sm:px-6 lg:py-44 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">
            Spacestagram 🪐
          </span>
        </h2>
        <p className="text-xl mt-4 max-w-full mx-auto text-gray-600 dark:text-gray-200">
          Share and favourite images from <a href="https://github.com/nasa/apod-api" target="_blank" rel="noopener noreferrer"><code className="text-blue-600 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-500">NASA's APOD API</code></a>.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;