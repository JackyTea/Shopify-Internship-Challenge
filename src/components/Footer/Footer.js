import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="px-8 sm:px-16 py-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <p className="text-center text-gray-500 dark:text-gray-400">©Spacestagram {new Date().getFullYear()}</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-center underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 sm:ml-4 ml-0">Github Repo</a>
          <a href="https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/edit#" target="_blank" rel="noopener noreferrer" className="text-center underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 sm:ml-4 ml-0">Shopify Challenge</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
