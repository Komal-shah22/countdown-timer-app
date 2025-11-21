"use client";

import React, { useEffect, useState } from 'react';
import TimerCard from './TimerCard';
import TimerControls from './TimerControls';

interface CountdownDisplayProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  isActive: boolean;
  isFinished: boolean;
  onPause: () => void;
  onStart: () => void;
  onReset: () => void;
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({
  timeLeft,
  isActive,
  isFinished,
  onPause,
  onStart,
  onReset,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on each second change
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); // Animation duration
    return () => clearTimeout(timer);
  }, [timeLeft.seconds]);

  if (isFinished) {
    return (
      <div className="text-center animate-pulse">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-green-300">
          Countdown Finished!
        </h2>
        <button
          onClick={onReset}
          className="mt-6 px-8 py-3 bg-green-400/30 dark:bg-green-800/30 backdrop-blur-sm border border-green-500/50 rounded-lg text-gray-800 dark:text-white font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/20 hover:bg-green-400/50 dark:hover:bg-green-700/40 transition-all duration-300 active:scale-95 active:shadow-inner"
        >
          Start New Countdown
        </button>
      </div>
    );
  }

  const cardAnimation = animate ? 'transform scale-105' : 'transform scale-100';

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center space-x-2 sm:space-x-4">
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
            <TimerCard value={timeLeft.days} label="Days" />
        </div>
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
            <TimerCard value={timeLeft.hours} label="Hours" />
        </div>
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
            <TimerCard value={timeLeft.minutes} label="Minutes" />
        </div>
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
            <TimerCard value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
      <TimerControls
        isActive={isActive}
        onPause={onPause}
        onStart={onStart}
        onReset={onReset}
      />
    </div>
  );
};

export default CountdownDisplay;


