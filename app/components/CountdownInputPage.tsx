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
      <h1 className="text-4xl font-bold text-green-300 mb-4">
        Countdown to Your Big Day
      </h1>
      <p className="text-lg text-green-400 mb-8">
        Select a date and time to start the countdown.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="datetime-local"
          value={targetDate}
          onChange={(e) => onTargetDateChange(e.target.value)}
          className="p-3 border border-green-500/50 rounded-lg bg-black/30 text-green-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={onStartCountdown}
          className="px-8 py-3 bg-green-800/30 backdrop-blur-sm border border-green-500 rounded-lg text-white font-semibold shadow-lg hover:bg-green-700/40 transition-all duration-300 transform hover:scale-105"
        >
          Start Countdown
        </button>
      </div>
    </div>
  );
};

export default CountdownInputPage;

