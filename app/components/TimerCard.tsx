import React from 'react';

interface TimerCardProps {
  value: number;
  label: string;
}

const TimerCard: React.FC<TimerCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 w-24 h-24 sm:w-32 sm:h-32">
      <div className="text-4xl sm:text-6xl font-bold text-green-400">
        {value}
      </div>
      <div className="text-sm sm:text-lg text-green-300">
        {label}
      </div>
    </div>
  );
};

export default TimerCard;

