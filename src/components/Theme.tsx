import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      // Set default theme based on system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
    }
  }, []);

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Update the HTML tag to reflect the current theme
    document.documentElement.classList.add(newTheme);
    document.documentElement.classList.remove(theme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-yellow-400" /> // Icon for light mode
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-900" /> // Icon for dark mode
      )}
    </button>
  );
};

export default ThemeToggle;
