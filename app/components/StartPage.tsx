"use client";

import React from 'react';

interface StartPageProps {
  onStartClick: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStartClick }) => {
  return (
    <div className="text-center animate-fade-in-up">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Countdown Timer Start
      </h1>
      <button
        onClick={onStartClick}
        className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
      >
        Click to Begin
      </button>
    </div>
  );
};

export default StartPage;
