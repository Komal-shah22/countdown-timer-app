"use client";

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TimerCard from './components/TimerCard';
import TimerControls from './components/TimerControls';
import { useTimer } from './hooks/useTimer';

export default function Home() {
  const [targetDate, setTargetDate] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const { timeLeft, isPaused, isFinished, pause, resume, reset } = useTimer(targetDate);

  const handleStart = () => {
    if (targetDate) {
      setIsStarted(true);
    }
  };

  const handleReset = () => {
    setIsStarted(false);
    setTargetDate('');
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {!isStarted ? (
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
                onChange={(e) => setTargetDate(e.target.value)}
                className="p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              />
              <button
                onClick={handleStart}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
              >
                Start Countdown
              </button>
            </div>
          </div>
        ) : (
          <div>
            {isFinished ? (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Countdown Finished!</h2>
                <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Start New Countdown
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center space-x-4">
                    <TimerCard value={timeLeft.days} label="Days" />
                    <TimerCard value={timeLeft.hours} label="Hours" />
                    <TimerCard value={timeLeft.minutes} label="Minutes" />
                    <TimerCard value={timeLeft.seconds} label="Seconds" />
                </div>
                <TimerControls
                  isPaused={isPaused}
                  onPause={pause}
                  onResume={resume}
                  onReset={handleReset}
                />
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}