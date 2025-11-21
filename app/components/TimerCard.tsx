import React from 'react';

interface TimerCardProps {
  value: number;
  label: string;
}

const TimerCard: React.FC<TimerCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100/80 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-green-500/30 rounded-lg p-4 w-24 h-24 sm:w-32 sm:h-32 shadow-lg">
      <div className="text-4xl sm:text-6xl font-bold text-green-600 dark:text-green-400">
        {value}
      </div>
      <div className="text-sm sm:text-lg text-gray-500 dark:text-green-300">
        {label}
      </div>
    </div>
  );
};

export default TimerCard;


