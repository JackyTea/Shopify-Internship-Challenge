import React from "react";
import ImageNotFound from "../../../assets/images/image_not_found.svg";

const ImageCard = (props) => {
  const { picture } = props;

  return (
    <div className="w-96 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img className="object-cover object-center w-full h-56 bg-gray-100 dark:bg-gray-700" src={!picture.url || picture?.url?.match(/([a-z\-_0-9/:.]*\.(jpg|jpeg|png|svg|gif))/i) == null ? ImageNotFound : picture.url} alt={picture.title} />

      <div className="px-6 py-4 flex flex-col">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white truncate mb-2">{picture.title}</h1>
        <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-10">{!picture.explanation ? "No description available." : picture.explanation}</p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h1 className="px-2 text-sm truncate">{!picture.copyright ? "No copyright." : `© ${picture.copyright}`}</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h1 className="px-2 text-sm">{!picture.date ? "" : new Date(picture.date).toDateString()}</h1>
        </div>

        <div className="flex flex-col justify-between md:flex-row mt-3">
          <button className="flex items-center p-3 font-medium tracking-wide text-gray-400 text-sm capitalize transition-colors duration-200 transform border-2 border-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="mx-1">Add To Favorites</span>
          </button>

          <button className="mt-2 sm:mt-0 flex items-center p-3 font-medium tracking-wide text-blue-400 text-sm capitalize transition-colors duration-200 transform border-2 border-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            <span className="mx-1">Copy Link</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;