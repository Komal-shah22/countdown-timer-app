"use client";

import { useState, useEffect, useCallback } from 'react';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { timeLeft, isFinished: difference <= 0 };
};

export const useTimer = (targetDateString: string) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Effect to initialize or reset the timer when targetDateString changes
  useEffect(() => {
    if (targetDateString) {
      const targetDate = new Date(targetDateString);
      const { timeLeft: newTimeLeft, isFinished: newIsFinished } = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      setIsFinished(newIsFinished);
      setIsActive(false); // Stop timer when target date changes
    } else {
      // Reset to initial state if targetDateString is empty
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsFinished(false);
      setIsActive(false);
    }
  }, [targetDateString]);

  const tick = useCallback(() => {
    if (targetDateString) {
      const targetDate = new Date(targetDateString);
      const { timeLeft: newTimeLeft, isFinished: newIsFinished } = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      if (newIsFinished) {
        setIsFinished(true);
        setIsActive(false);
      }
    }
  }, [targetDateString]);

  useEffect(() => {
    if (isActive && !isFinished) {
      const timer = setInterval(tick, 1000);
      return () => clearInterval(timer);
    }
  }, [isActive, isFinished, tick]);

  const start = () => {
    if (targetDateString && !isFinished) {
      setIsActive(true);
    }
  };

  const pause = () => {
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    if (targetDateString) {
      const targetDate = new Date(targetDateString);
      const { timeLeft: newTimeLeft, isFinished: newIsFinished } = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      setIsFinished(newIsFinished);
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsFinished(false);
    }
  };

  return { timeLeft, isActive, isFinished, start, pause, reset };
};
