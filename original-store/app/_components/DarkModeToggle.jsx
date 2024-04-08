"use client"

import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in local storage
    const savedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedDarkMode === "true");
  }, []);

  const toggleDarkMode = () => {
    // Toggle dark mode state
    setIsDarkMode(!isDarkMode);
    // Update dark mode preference in local storage
    localStorage.setItem("darkMode", !isDarkMode);
    // Apply or remove 'dark' class from the <html> tag
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="bg-gray-300 dark:bg-gray-800 rounded-full w-12 h-6 p-1 flex items-center justify-center"
      onClick={toggleDarkMode}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white dark:bg-gray-300 transition-transform ${
          isDarkMode ? "translate-x-6" : ""
        }`}
      ></div>
    </button>
  );
};

export default DarkModeToggle;
