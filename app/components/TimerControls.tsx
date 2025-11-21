import React from 'react';

interface TimerControlsProps {
  isActive: boolean;
  onPause: () => void;
  onStart: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ isActive, onPause, onStart, onReset }) => {
  const baseStyle = "px-6 py-2 backdrop-blur-sm border rounded-lg text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105";

  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {!isActive ? (
        <button
          onClick={onStart}
          className={`${baseStyle} bg-green-500/30 border-green-400/50 hover:bg-green-500/50`}
        >
          Resume
        </button>
      ) : (
        <button
          onClick={onPause}
          className={`${baseStyle} bg-yellow-500/30 border-yellow-400/50 hover:bg-yellow-500/50`}
        >
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className={`${baseStyle} bg-red-500/30 border-red-400/50 hover:bg-red-500/50`}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;

