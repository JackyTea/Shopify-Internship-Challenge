import React, { useEffect, useState } from "react"
import { getData } from "../../api/api";
import ImageCard from "./ImageCard/ImageCard";

const ImageGrid = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [count, setCount] = useState(10);
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
        <div className="container mx-auto px-16 sm:px-24 w-full">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-center w-full">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
                  {!pictures || pictures?.length === 0 ?
                    <>
                      {resultsFound ? "Loading" : "No results found for this query..."}
                    </>
                    :
                    <>
                      {pictures?.map((picture, index) => <ImageCard key={index} picture={picture} />)}
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGrid;