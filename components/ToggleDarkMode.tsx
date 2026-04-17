"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleDarkMode = ({ iconSize }: { iconSize?: number }) => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="flex gap-2 justify-center bg-gray-300/50 dark:bg-gray-800/50 w-auto rounded-xl p-4 text-gray-800 transition-all duration-200 dark:text-white hover:scale-125 hover:text-gray-400 dark:hover:text-gray-400 hover:cursor-pointer"
    >
      {isDarkMode ? (
        <MdDarkMode size={iconSize} />
      ) : (
        <MdLightMode size={iconSize} />
      )}
    </div>
  );
};

export default ToggleDarkMode;
