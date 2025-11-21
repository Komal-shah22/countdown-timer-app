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
        Set Your Date
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Select a date and time to start the countdown.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="datetime-local"
          value={targetDate}
          onChange={(e) => onTargetDateChange(e.target.value)}
          className="p-3 border border-gray-300 dark:border-green-500/50 rounded-lg bg-gray-100/50 dark:bg-black/30 text-gray-900 dark:text-green-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={onStartCountdown}
          className="px-8 py-3 bg-green-400/30 dark:bg-green-800/30 backdrop-blur-sm border border-green-500/50 rounded-lg text-gray-800 dark:text-white font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/20 hover:bg-green-400/50 dark:hover:bg-green-700/40 transition-all duration-300 active:scale-95 active:shadow-inner"
        >
          Start Countdown
        </button>
      </div>
    </div>
  );
};

export default CountdownInputPage;


