import React from "react";
import ImageNotFound from "../../../assets/images/image_not_found.svg";

const ImageCard = (props) => {
  const { picture } = props;

  return (
    <div className="w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 transform hover:scale-105 ease-in-out duration-200">
      <img className="object-cover object-center w-full h-56 bg-gray-100 dark:bg-gray-700" src={picture.url.match(/([a-z\-_0-9/:.]*\.(jpg|jpeg|png|svg|gif))/i) == null ? ImageNotFound : picture.url} alt={picture.title} />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{picture.title}</h1>
        <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-4">{!picture.explanation ? "No description available." : picture.explanation}</p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>

          <h1 className="px-2 text-sm">{!picture.copyright ? "No copyright." : `${picture.copyright}`}</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>

          <h1 className="px-2 text-sm">{!picture.date ? "" : new Date(picture.date).toDateString()}</h1>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;