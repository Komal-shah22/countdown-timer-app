"use client";

import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

interface StartPageProps {
  onStartClick: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStartClick }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-8 animate-float">
        <Clock size={80} className="mx-auto text-green-500 dark:text-green-400 drop-shadow-lg" />
      </div>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-300 mb-4">
        Countdown Timer
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
        Track your important events with style. Beautiful animations, dark mode, and sound notifications.
      </p>
      <button
        onClick={onStartClick}
        className="group relative px-10 py-4 bg-gradient-to-r from-green-400 to-emerald-500 dark:from-green-600 dark:to-emerald-700 rounded-xl text-white font-bold text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Sparkles size={20} />
          Get Started
          <Sparkles size={20} />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 dark:from-emerald-700 dark:to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
};

export default StartPage;


