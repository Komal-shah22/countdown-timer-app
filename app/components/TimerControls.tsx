import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerControlsProps {
  isActive: boolean;
  onPause: () => void;
  onStart: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ isActive, onPause, onStart, onReset }) => {
  const baseStyle = "flex items-center gap-2 px-8 py-3 backdrop-blur-md border-2 rounded-xl font-bold shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 active:shadow-inner";
  const resumeStyle = `${baseStyle} bg-gradient-to-r from-green-400/40 to-emerald-500/40 border-green-500/60 text-gray-800 dark:text-white dark:from-green-700/40 dark:to-emerald-800/40 hover:from-green-400/60 hover:to-emerald-500/60 dark:hover:from-green-600/60 dark:hover:to-emerald-700/60 hover:shadow-green-500/50`;
  const pauseStyle = `${baseStyle} bg-gradient-to-r from-yellow-400/40 to-orange-500/40 border-yellow-500/60 text-gray-800 dark:text-white dark:from-yellow-700/40 dark:to-orange-800/40 hover:from-yellow-400/60 hover:to-orange-500/60 dark:hover:from-yellow-600/60 dark:hover:to-orange-700/60 hover:shadow-yellow-500/50`;
  const resetStyle = `${baseStyle} bg-gradient-to-r from-red-400/40 to-pink-500/40 border-red-500/60 text-gray-800 dark:text-white dark:from-red-700/40 dark:to-pink-800/40 hover:from-red-400/60 hover:to-pink-500/60 dark:hover:from-red-600/60 dark:hover:to-pink-700/60 hover:shadow-red-500/50`;

  return (
    <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
      {!isActive ? (
        <button
          onClick={onStart}
          className={resumeStyle}
        >
          <Play size={20} fill="currentColor" />
          Start
        </button>
      ) : (
        <button
          onClick={onPause}
          className={pauseStyle}
        >
          <Pause size={20} fill="currentColor" />
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className={resetStyle}
      >
        <RotateCcw size={20} />
        Reset
      </button>
    </div>
  );
};

export default TimerControls;



