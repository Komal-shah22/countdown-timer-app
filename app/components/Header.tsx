"use client";

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!theme && prefersDark)) {
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

  if (!mounted) return null;

  return (
    <header className="absolute top-0 right-0 p-6 bg-transparent z-20">
      <button
        onClick={toggleDarkMode}
        className="group relative p-3 rounded-full text-gray-800 dark:text-gray-100 bg-gray-200/70 dark:bg-gray-700/70 backdrop-blur-md border border-gray-300 dark:border-gray-600 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
        aria-label="Toggle dark mode"
      >
        <div className="relative">
          {isDarkMode ? (
            <Sun size={24} className="animate-spin-slow" />
          ) : (
            <Moon size={24} />
          )}
        </div>
        <span className="absolute -bottom-8 right-0 text-xs bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isDarkMode ? 'Light' : 'Dark'} mode
        </span>
      </button>
    </header>
  );
};

export default Header;


