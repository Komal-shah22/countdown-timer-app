"use client";

import React from 'react';

interface StartPageProps {
  onStartClick: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStartClick }) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-green-300 mb-6">
        Countdown Timer Start
      </h1>
      <button
        onClick={onStartClick}
        className="px-8 py-3 bg-green-800/30 backdrop-blur-sm border border-green-500 rounded-lg text-white font-semibold shadow-lg hover:bg-green-700/40 transition-all duration-300 transform hover:scale-105"
      >
        Click to Begin
      </button>
    </div>
  );
};

export default StartPage;

