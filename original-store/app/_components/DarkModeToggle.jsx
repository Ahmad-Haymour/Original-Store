"use client";

import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

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
      className="rounded-full w-12 h-6 p-1 flex items-center justify-center
      absolute left-1 bottom-6 z-50"
      onClick={toggleDarkMode}
    >
      { isDarkMode ? (
        <Moon
          title="Dark Mode"
          className="bg-dark-background rounded w-8 h-8 p-1"
          style={{ color: "#f2f542" }}
        />
      ) : (
        <Sun
          title="Light Mode"
          className="bg-dark-background rounded w-8 h-8 p-1"
          style={{ color: "#f2f542" }}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
