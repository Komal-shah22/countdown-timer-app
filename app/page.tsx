"use client";

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTimer } from './hooks/useTimer';
import StartPage from './components/StartPage';
import CountdownInputPage from './components/CountdownInputPage';
import CountdownDisplay from './components/CountdownDisplay';

type Page = 'start' | 'input' | 'display';

export default function Home() {
  const [page, setPage] = useState<Page>('start');
  const [animation, setAnimation] = useState('animate-fade-in-up');
  const [targetDate, setTargetDate] = useState('');
  const { timeLeft, isActive, isFinished, start, pause, reset } = useTimer(targetDate);

  const changePage = (newPage: Page) => {
    setAnimation('animate-slide-out-left');
    setTimeout(() => {
      setPage(newPage);
      setAnimation('animate-slide-in-right');
    }, 500); // Duration of the slide-out animation
  };

  const handleGoToInput = () => {
    changePage('input');
  };

  const handleStartCountdown = () => {
    if (targetDate) {
      start();
      changePage('display');
    }
  };

  const handleResetAll = () => {
    setTargetDate('');
    reset();
    changePage('start');
  };

  const renderPage = () => {
    switch (page) {
      case 'start':
        return <StartPage onStartClick={handleGoToInput} />;
      case 'input':
        return (
          <CountdownInputPage
            targetDate={targetDate}
            onTargetDateChange={setTargetDate}
            onStartCountdown={handleStartCountdown}
          />
        );
      case 'display':
        return (
          <CountdownDisplay
            timeLeft={timeLeft}
            isActive={isActive}
            isFinished={isFinished}
            onPause={pause}
            onStart={start}
            onReset={handleResetAll}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 overflow-hidden">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-500 dark:text-green-400 mb-10">
          Countdown Timer
        </h1>
        <div className={animation}>
            {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}