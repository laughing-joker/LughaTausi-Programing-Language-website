import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid"; // Using icons from react-icons or heroicons

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Update the HTML tag to reflect the current theme
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
