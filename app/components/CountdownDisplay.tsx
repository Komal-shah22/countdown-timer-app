"use client";

import React, { useEffect, useState } from 'react';
import TimerCard from './TimerCard';
import TimerControls from './TimerControls';
import CircularProgress from './CircularProgress';
import Confetti from './Confetti';
import { Volume2, VolumeX } from 'lucide-react';

interface CountdownDisplayProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  isActive: boolean;
  isFinished: boolean;
  onPause: () => void;
  onStart: () => void;
  onReset: () => void;
  totalSeconds: number;
  elapsedSeconds: number;
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({
  timeLeft,
  isActive,
  isFinished,
  onPause,
  onStart,
  onReset,
  totalSeconds,
  elapsedSeconds,
}) => {
  const [animate, setAnimate] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [timeLeft.seconds]);

  useEffect(() => {
    if (isFinished && soundEnabled && !hasPlayedSound) {
      playNotificationSound();
      setHasPlayedSound(true);
    }
    if (!isFinished) {
      setHasPlayedSound(false);
    }
  }, [isFinished, soundEnabled, hasPlayedSound]);

  const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const progressPercentage = totalSeconds > 0
    ? Math.max(0, Math.min(100, ((totalSeconds - elapsedSeconds) / totalSeconds) * 100))
    : 0;

  if (isFinished) {
    return (
      <>
        <Confetti />
        <div className="text-center animate-float">
          <div className="mb-6 text-6xl">🎉</div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 dark:from-green-300 dark:to-emerald-400 mb-4 animate-pulse-glow">
            Time's Up!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your countdown has finished
          </p>
          <button
            onClick={onReset}
            className="px-8 py-3 bg-green-400/30 dark:bg-green-800/30 backdrop-blur-sm border border-green-500/50 rounded-lg text-gray-800 dark:text-white font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/20 hover:bg-green-400/50 dark:hover:bg-green-700/40 transition-all duration-300 active:scale-95 active:shadow-inner"
          >
            Start New Countdown
          </button>
        </div>
      </>
    );
  }

  const cardAnimation = animate ? 'transform scale-105' : 'transform scale-100';

  return (
    <div className="flex flex-col items-center space-y-8">
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="absolute top-20 right-4 p-2 rounded-full bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-all duration-200"
        title={soundEnabled ? "Mute notifications" : "Enable sound notifications"}
      >
        {soundEnabled ? <Volume2 size={20} className="text-green-500" /> : <VolumeX size={20} className="text-gray-500" />}
      </button>

      <div className="mb-4">
        <CircularProgress percentage={progressPercentage} size={180} strokeWidth={10} />
      </div>

      <div className="flex items-center justify-center space-x-2 sm:space-x-4 flex-wrap gap-2">
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
          <TimerCard value={timeLeft.days} label="Days" />
        </div>
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
          <TimerCard value={timeLeft.hours} label="Hours" />
        </div>
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
          <TimerCard value={timeLeft.minutes} label="Minutes" />
        </div>
        <div className={`transition-transform duration-300 ${cardAnimation}`}>
          <TimerCard value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>

      <TimerControls
        isActive={isActive}
        onPause={onPause}
        onStart={onStart}
        onReset={onReset}
      />
    </div>
  );
};

export default CountdownDisplay;


