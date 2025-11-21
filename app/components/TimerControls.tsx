import React from 'react';

interface TimerControlsProps {
  isActive: boolean;
  onPause: () => void;
  onStart: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ isActive, onPause, onStart, onReset }) => {
  const baseStyle = "px-6 py-2 backdrop-blur-sm border border-green-500 rounded-lg text-white font-semibold shadow-lg hover:bg-green-700/40 transition-all duration-300 transform hover:scale-105 bg-green-800/30";

  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {!isActive ? (
        <button
          onClick={onStart}
          className={baseStyle}
        >
          Resume
        </button>
      ) : (
        <button
          onClick={onPause}
          className={baseStyle}
        >
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className={baseStyle}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;


