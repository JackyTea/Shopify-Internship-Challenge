import React, { useEffect, useState } from "react";
import { getData } from "../../api/api";
import ImageFilterForm from "./ImageFilterForm/ImageFilterForm";
import LoadingStatusDisplay from "./LoadingStatusDisplay/LoadingStatusDisplay";
import ResultsDisplay from "./ResultsDisplay/ResultsDisplay";

const ImageGrid = () => {
  const [count, setCount] = useState(12);
  const [pictures, setPictures] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const [showFavourites, setShowFavourites] = useState(false);
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem("favourites")) || []);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const data = await getData(`&count=${count}`);
      if (mounted && !data.code) {
        setPictures(data);
      }
      if (mounted && data.code) {
        setResultsFound(false);
      }
    }
    fetchData();

    return () => {
      mounted = false;
    }
  }, [count])

  const isFavourited = (picture) => {
    for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].title === picture.title) {
        return true;
      }
    }
    return false;
  }

  const addToFavourites = (picture) => {
    if (localStorage.getItem("favourites")) {
      const favouritesArray = JSON.parse(localStorage.getItem("favourites"));
      favouritesArray.push(picture);
      localStorage.setItem("favourites", JSON.stringify(favouritesArray));
    } else {
      const newFavouritesArray = [];
      newFavouritesArray.push(picture);
      localStorage.setItem("favourites", JSON.stringify(newFavouritesArray));
    }
    setFavourites([...favourites, picture]);
  }

  const removeFromFavourites = (picture) => {
    if (localStorage.getItem("favourites")) {
      const favouritesArray = JSON.parse(localStorage.getItem("favourites"));
      const removedFavourites = favouritesArray.filter(f => f.title !== picture.title);
      if (removedFavourites.length === 0) {
        localStorage.clear();
        setFavourites([]);
      } else {
        localStorage.setItem("favourites", JSON.stringify(removedFavourites));
        setFavourites(removedFavourites);
      }
    }
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto px-8 sm:px-16 w-full">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-center">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-4 py-4 overflow-x-auto">
                {resultsFound &&
                  <ImageFilterForm count={count} favourites={favourites} showFavourites={showFavourites} setCount={setCount} setPictures={setPictures} setShowFavourites={setShowFavourites} />
                }
                {!pictures || pictures?.length === 0 ?
                  <LoadingStatusDisplay resultsFound={resultsFound} />
                  :
                  <ResultsDisplay pictures={pictures} favourites={favourites} showFavourites={showFavourites} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} isFavourited={isFavourited} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGrid;
