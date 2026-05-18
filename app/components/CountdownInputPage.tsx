"use client";

import React from 'react';
import PresetButtons from './PresetButtons';

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
  const handlePresetSelect = (minutes: number) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutes);
    const formattedDate = now.toISOString().slice(0, 16);
    onTargetDateChange(formattedDate);
  };

  const isValidDate = targetDate && new Date(targetDate) > new Date();

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-float">
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
          className="p-3 border border-gray-300 dark:border-green-500/50 rounded-lg bg-gray-100/50 dark:bg-black/30 text-gray-900 dark:text-green-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
        />
        <button
          onClick={onStartCountdown}
          disabled={!isValidDate}
          className="px-8 py-3 bg-green-400/30 dark:bg-green-800/30 backdrop-blur-sm border border-green-500/50 rounded-lg text-gray-800 dark:text-white font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/20 hover:bg-green-400/50 dark:hover:bg-green-700/40 transition-all duration-300 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Start Countdown
        </button>
      </div>
      <PresetButtons onPresetSelect={handlePresetSelect} />
      {targetDate && new Date(targetDate) <= new Date() && (
        <p className="mt-4 text-sm text-red-500 dark:text-red-400">
          Please select a future date and time
        </p>
      )}
    </div>
  );
};

export default CountdownInputPage;


