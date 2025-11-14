
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm rounded-2xl p-4 min-w-[70px] sm:min-w-[90px] border border-light/10 shadow-lg">
    <span className="text-3xl sm:text-4xl font-extrabold text-accent">{String(value).padStart(2, '0')}</span>
    <span className="text-xs sm:text-sm font-medium text-light-gray uppercase tracking-wider">{label}</span>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [hasEnded, setHasEnded] = useState(
    () => +new Date(targetDate) - +new Date() <= 0
  );

  useEffect(() => {
    if (hasEnded) return;

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setHasEnded(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hasEnded, targetDate]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center space-x-2 sm:space-x-4">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
      {hasEnded && (
        <p className="mt-4 text-2xl font-bold text-accent animate-pulse">
          O evento começou!
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;