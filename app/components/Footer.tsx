import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full p-6 text-center bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-green-400 dark:hover:bg-green-600 transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-green-400 dark:hover:bg-green-600 transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
          Built with <Heart size={16} className="text-red-500 animate-pulse" /> by{' '}
          <span className="font-bold text-green-600 dark:text-green-400">KOMAL</span>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Professional Countdown Timer © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
