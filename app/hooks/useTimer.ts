"use client";

import { useState, useEffect, useCallback } from 'react';

const calculateTimeLeft = (targetDate: Date, startDate: Date) => {
  const now = new Date();
  const difference = +targetDate - +now;
  const totalDifference = +targetDate - +startDate;

  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const totalSeconds = Math.floor(totalDifference / 1000);
  const elapsedSeconds = Math.floor((+now - +startDate) / 1000);

  return { timeLeft, isFinished: difference <= 0, totalSeconds, elapsedSeconds };
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
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (targetDateString) {
      const targetDate = new Date(targetDateString);
      const now = new Date();
      setStartDate(now);
      const result = calculateTimeLeft(targetDate, now);
      setTimeLeft(result.timeLeft);
      setIsFinished(result.isFinished);
      setTotalSeconds(result.totalSeconds);
      setElapsedSeconds(0);
      setIsActive(false);
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsFinished(false);
      setIsActive(false);
      setTotalSeconds(0);
      setElapsedSeconds(0);
    }
  }, [targetDateString]);

  const tick = useCallback(() => {
    if (targetDateString) {
      const targetDate = new Date(targetDateString);
      const result = calculateTimeLeft(targetDate, startDate);
      setTimeLeft(result.timeLeft);
      setElapsedSeconds(result.elapsedSeconds);
      if (result.isFinished) {
        setIsFinished(true);
        setIsActive(false);
      }
    }
  }, [targetDateString, startDate]);

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
      const now = new Date();
      setStartDate(now);
      const result = calculateTimeLeft(targetDate, now);
      setTimeLeft(result.timeLeft);
      setIsFinished(result.isFinished);
      setTotalSeconds(result.totalSeconds);
      setElapsedSeconds(0);
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsFinished(false);
      setTotalSeconds(0);
      setElapsedSeconds(0);
    }
  };

  return { timeLeft, isActive, isFinished, start, pause, reset, totalSeconds, elapsedSeconds };
};
