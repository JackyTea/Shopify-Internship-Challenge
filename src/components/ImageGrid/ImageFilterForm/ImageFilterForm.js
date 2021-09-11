import React from "react";

const ImageFilterForm = (props) => {
  const { count, setCount, setPictures } = props;

  const handleImageCountSelect = (event) => {
    setPictures([]);
    setCount(event.target.value);
  }

  return (
    <div className="my-8 flex flex-col md:flex-row items-center">
      <div className="w-full">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image-count">
          Number of Images
        </label>
        <div className="relative">
          <select value={count} onChange={handleImageCountSelect} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image-count">
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageFilterForm;