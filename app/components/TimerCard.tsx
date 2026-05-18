import React from 'react';

interface TimerCardProps {
  value: number;
  label: string;
}

const TimerCard: React.FC<TimerCardProps> = ({ value, label }) => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-100/90 to-gray-200/90 dark:from-black/40 dark:to-gray-900/40 backdrop-blur-md border-2 border-gray-300 dark:border-green-500/40 rounded-2xl p-4 w-24 h-24 sm:w-32 sm:h-32 shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 group">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 dark:from-green-500/20 dark:to-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-300">
        {String(value).padStart(2, '0')}
      </div>
      <div className="relative text-xs sm:text-sm font-semibold text-gray-600 dark:text-green-300 uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
};

export default TimerCard;


