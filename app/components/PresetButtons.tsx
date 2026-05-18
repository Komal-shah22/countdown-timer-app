"use client";

import React from 'react';
import { Clock, Calendar, Zap } from 'lucide-react';

interface PresetButtonsProps {
  onPresetSelect: (minutes: number) => void;
}

const PresetButtons: React.FC<PresetButtonsProps> = ({ onPresetSelect }) => {
  const presets = [
    { label: '5 Min', minutes: 5, icon: Zap },
    { label: '30 Min', minutes: 30, icon: Clock },
    { label: '1 Hour', minutes: 60, icon: Clock },
    { label: '1 Day', minutes: 1440, icon: Calendar },
    { label: '1 Week', minutes: 10080, icon: Calendar },
  ];

  return (
    <div className="mt-6">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Quick Presets:</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {presets.map((preset) => {
          const Icon = preset.icon;
          return (
            <button
              key={preset.label}
              onClick={() => onPresetSelect(preset.minutes)}
              className="flex items-center gap-1 px-4 py-2 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300 dark:border-green-500/30 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-green-400/30 dark:hover:bg-green-800/30 hover:border-green-500/50 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Icon size={14} />
              {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PresetButtons;
