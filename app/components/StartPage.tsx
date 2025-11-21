"use client";

import React from 'react';

interface StartPageProps {
  onStartClick: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStartClick }) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Welcome
      </h1>
      <button
        onClick={onStartClick}
        className="px-8 py-3 bg-green-400/30 dark:bg-green-800/30 backdrop-blur-sm border border-green-500/50 rounded-lg text-gray-800 dark:text-white font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/20 hover:bg-green-400/50 dark:hover:bg-green-700/40 transition-all duration-300 active:scale-95 active:shadow-inner"
      >
        Click to Begin
      </button>
    </div>
  );
};

export default StartPage;


