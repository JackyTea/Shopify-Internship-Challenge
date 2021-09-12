import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ResultsDisplay = (props) => {
  const { pictures, favourites, showFavourites, addToFavourites, removeFromFavourites, isFavourited } = props;

  return (
    <>
      {showFavourites ?
        <>
          {!favourites || favourites.length === 0 ?
            <div className="flex flex-grow w-96 text-center text-gray-500 dark:text-gray-300">
              You haven't favourited anything yet!
            </div>
            :
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {favourites?.map((picture, index) => <ImageCard key={index} picture={picture} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} isFavourited={isFavourited} />)}
            </div>
          }
        </>
        :
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {pictures?.map((picture, index) => <ImageCard key={index} picture={picture} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} isFavourited={isFavourited} />)}
        </div>
      }
    </>
  );
}

export default ResultsDisplay;