import React from "react";
import ImageCardSkeleton from "../ImageCardSkeleton/ImageCardSkeleton";

const LoadingStatusDisplay = (props) => {
  const { resultsFound } = props;

  return (
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
  );
}

export default LoadingStatusDisplay;