import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Map the current route to a page name
  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/directory':
        return 'Employee';
      case '/perfomance':
        return 'Performance';
      case '/profile/:name':
        return 'Profile';
      case '/department-management':
        return 'Department';
      // Add more cases as needed
      default:
        return 'Dashboard'; // Default name
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-[260px] w-[calc(100%-250px)] z-10">
      {/* Dynamic Page Name */}
      <div className="flex items-center space-x-4">
        <a className="text-gray-700 text-lg font-semibold" href={location.pathname}>
          {getPageName()}
        </a>
      </div>

      {/* Right Side Icons and Profile */}
      <div className="flex items-center ml-auto space-x-4">
        <div className="flex space-x-4">
          <button
            onClick={handleToggle}
            className="text-gray-700 text-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a className="text-gray-700 text-lg" href="/notification">
            🔔
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
