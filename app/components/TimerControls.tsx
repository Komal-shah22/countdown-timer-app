import React from 'react';

interface TimerControlsProps {
  isPaused: boolean;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ isPaused, onPause, onResume, onReset }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {isPaused ? (
        <button
          onClick={onResume}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          Resume
        </button>
      ) : (
        <button
          onClick={onPause}
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
