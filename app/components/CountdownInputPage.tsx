"use client";

import React from 'react';

interface CountdownInputPageProps {
  targetDate: string;
  onTargetDateChange: (date: string) => void;
  onStartCountdown: () => void;
}

const CountdownInputPage: React.FC<CountdownInputPageProps> = ({
  targetDate,
  onTargetDateChange,
  onStartCountdown,
}) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Countdown to Your Big Day
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Select a date and time to start the countdown.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="datetime-local"
          value={targetDate}
          onChange={(e) => onTargetDateChange(e.target.value)}
          className="p-3 border rounded-lg bg-white/30 dark:bg-gray-800/50 text-gray-800 dark:text-gray-100 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={onStartCountdown}
          className="px-8 py-3 bg-blue-500/50 backdrop-blur-sm border border-blue-400/60 rounded-lg text-white font-semibold shadow-lg hover:bg-blue-500/70 transition-all duration-300 transform hover:scale-105"
        >
          Start Countdown
        </button>
      </div>
    </div>
  );
};

export default CountdownInputPage;
