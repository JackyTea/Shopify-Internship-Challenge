import React, { useEffect, useState } from "react"
import { getData } from "../../api/api";
import ImageCard from "./ImageCard/ImageCard";
import ImageCardSkeleton from "./ImageCardSkeleton/ImageCardSkeleton";
import ImageFilterForm from "./ImageFilterForm/ImageFilterForm";

const ImageGrid = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [count, setCount] = useState(12);
  const [pictures, setPictures] = useState([]);

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

  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-8 sm:px-24 w-full">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-center w-full">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                {resultsFound &&
                  <ImageFilterForm count={count} setCount={setCount} setPictures={setPictures} />
                }
                {!pictures || pictures?.length === 0 ?
                  <>
                    {!resultsFound &&
                      <div className="w-full h-56">
                        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                          <div className="flex items-center justify-center w-12 bg-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>

                          <div className="px-4 py-2 -mx-3">
                            <div className="mx-3">
                              <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                              <p className="text-sm text-gray-600 dark:text-gray-200">No results for this query!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    {resultsFound &&
                      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                        <ImageCardSkeleton />
                      </div>
                    }
                  </>
                  :
                  <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                    {pictures?.map((picture, index) => <ImageCard key={index} picture={picture} />)}
                  </div>
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