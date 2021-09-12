import React from "react";
import ImageNotFound from "../../../assets/images/image_not_found.svg";

const ImageCard = (props) => {
  const { picture, addToFavourites, removeFromFavourites, isFavourited } = props;

  const expandOrCollapseText = (paragraphTitle, spanTitle) => {
    const spanText = document.getElementById(spanTitle)
    const description = document.getElementById(paragraphTitle);
    if (description.classList.contains("line-clamp-6")) {
      spanText.innerHTML = "Collapse text";
      description.classList.remove("line-clamp-6");
    } else {
      spanText.innerHTML = "Show more...";
      description.classList.add("line-clamp-6");
    }
  }

  return (
    <div className="flex flex-col w-full h-auto bg-white rounded shadow-lg dark:bg-gray-800">
      <img className="object-cover object-center w-full h-56 bg-gray-100 dark:bg-gray-700 rounded-t-lg" src={!picture.url || picture?.url?.match(/([a-z\-_0-9/:.]*\.(jpg|jpeg|png|svg|gif))/i) == null ? ImageNotFound : picture.url} alt={picture.title} />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white truncate mb-2">{picture.title}</h1>
        <p id={picture.title + "para_id"} className="text-gray-700 dark:text-gray-400 text-sm line-clamp-6">{!picture.explanation ? "No description available." : picture.explanation}</p><span id={picture.title + "span_id"} onClick={() => expandOrCollapseText((picture.title + "para_id"), (picture.title + "span_id"))} className="text-blue-600 dark:text-blue-700 hover:text-blue-900 dark:hover:text-blue-400 text-sm cursor-pointer">Show more...</span>
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
      </div>

      <div className="flex flex-col justify-between md:flex-row mt-auto px-6 py-4">
        {!isFavourited(picture) ?
          <button onClick={() => addToFavourites(picture)} className="flex items-center p-3 flex-grow mr-0 sm:mr-2 font-medium tracking-wide text-gray-400 text-sm capitalize transition-colors duration-200 transform border-2 border-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="mx-1">Add To Favorites</span>
          </button>
          :
          <button onClick={() => removeFromFavourites(picture)} className="flex items-center p-3 flex-grow mr-0 sm:mr-2 font-medium tracking-wide text-red-400 text-sm capitalize transition-colors duration-200 transform border-2 border-red-400 rounded-md hover:bg-red-100 dark:hover:bg-red-700 focus:outline-none focus:bg-red-100 dark:focus:bg-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span className="mx-1">Remove From Favourites</span>
          </button>
        }
        <button className="mt-2 sm:mt-0 flex items-center p-3 font-medium tracking-wide text-blue-400 text-sm capitalize transition-colors duration-200 transform border-2 border-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
          <span className="mx-1">Copy Link</span>
        </button>
      </div>
    </div>
  );
}

export default ImageCard;