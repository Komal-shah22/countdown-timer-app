"use client";

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="absolute top-0 right-0 p-4 bg-transparent z-10">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full text-gray-800 dark:text-gray-100 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
};

export default Header;


