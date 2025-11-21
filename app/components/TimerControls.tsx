import React from 'react';

interface TimerControlsProps {
  isActive: boolean;
  onPause: () => void;
  onStart: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ isActive, onPause, onStart, onReset }) => {
  const baseStyle = "px-6 py-2 backdrop-blur-sm border rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 active:shadow-inner";
  const resumeStyle = `${baseStyle} bg-green-400/30 border-green-500/50 text-gray-800 dark:text-white dark:bg-green-800/30 hover:bg-green-400/50 dark:hover:bg-green-700/40`;
  const pauseStyle = `${baseStyle} bg-yellow-400/30 border-yellow-500/50 text-gray-800 dark:text-white dark:bg-yellow-800/30 hover:bg-yellow-400/50 dark:hover:bg-yellow-700/40`;
  const resetStyle = `${baseStyle} bg-red-400/30 border-red-500/50 text-gray-800 dark:text-white dark:bg-red-800/30 hover:bg-red-400/50 dark:hover:bg-red-700/40`;


  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {!isActive ? (
        <button
          onClick={onStart}
          className={resumeStyle}
        >
          Resume
        </button>
      ) : (
        <button
          onClick={onPause}
          className={pauseStyle}
        >
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className={resetStyle}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;



