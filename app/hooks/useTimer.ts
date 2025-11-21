"use client";

import { useState, useEffect, useRef } from 'react';

export const useTimer = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        setIsFinished(true);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }

      return timeLeft;
    };

    if (targetDate && !isPaused && !isFinished) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetDate, isPaused, isFinished, setIsFinished]);

  const pause = () => {
    setIsPaused(true);
  };

  const resume = () => {
    setIsPaused(false);
  };

  const reset = () => {
    setIsPaused(false);
    setIsFinished(false);
    setTimeLeft(calculateTimeLeft());
  };

  return { timeLeft, isPaused, isFinished, pause, resume, reset };
};
