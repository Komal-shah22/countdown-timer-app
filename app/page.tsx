"use client";

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTimer } from './hooks/useTimer';
import StartPage from './components/StartPage';
import CountdownInputPage from './components/CountdownInputPage';
import CountdownDisplay from './components/CountdownDisplay';

export default function Home() {
  const [page, setPage] = useState<'start' | 'input' | 'display'>('start');
  const [targetDate, setTargetDate] = useState('');
  const { timeLeft, isActive, isFinished, start, pause, reset } = useTimer(targetDate);

  const handleGoToInput = () => {
    setPage('input');
  };

  const handleStartCountdown = () => {
    if (targetDate) {
      start();
      setPage('display');
    }
  };

  const handleResetAll = () => {
    setTargetDate('');
    reset();
    setPage('start');
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
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="animate-fade-in-up">
            {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}