import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container px-8 sm:px-16 py-4 mx-auto">
        <div>
          <p className="text-center text-gray-800 dark:text-white">© Jacky Tea {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
