"use client";

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTimer } from './hooks/useTimer';
import StartPage from './components/StartPage';
import CountdownInputPage from './components/CountdownInputPage';
import CountdownDisplay from './components/CountdownDisplay';

type Page = 'start' | 'input' | 'display';

export default function Home() {
  const [page, setPage] = useState<Page>('start');
  const [animation, setAnimation] = useState('opacity-100 translate-x-0');
  const [targetDate, setTargetDate] = useState('');
  const { timeLeft, isActive, isFinished, start, pause, reset, totalSeconds, elapsedSeconds } = useTimer(targetDate);

  const changePage = (newPage: Page) => {
    setAnimation('opacity-0 -translate-x-full');
    setTimeout(() => {
      setPage(newPage);
      setAnimation('opacity-0 translate-x-full');
      setTimeout(() => {
        setAnimation('opacity-100 translate-x-0');
      }, 50);
    }, 300);
  };

  const handleGoToInput = () => {
    changePage('input');
  };

  const handleStartCountdown = () => {
    if (targetDate && new Date(targetDate) > new Date()) {
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
            totalSeconds={totalSeconds}
            elapsedSeconds={elapsedSeconds}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200/20 via-transparent to-transparent dark:from-green-900/10 pointer-events-none" />
      <Header />
      <main className="relative flex-grow flex flex-col items-center justify-center p-4 overflow-hidden">
        {page === 'start' && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-500 dark:text-green-400 opacity-50">
            
            </h1>
          </div>
        )}
        <div className={`transition-all duration-300 ease-out ${animation} w-full max-w-6xl`}>
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}