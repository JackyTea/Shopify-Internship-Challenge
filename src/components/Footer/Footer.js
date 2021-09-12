import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="px-8 sm:px-16 py-4 mx-auto">
        <div>
          <p className="text-center text-gray-800 dark:text-white">© Jacky Tea {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
