import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  small?: boolean;
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
  small?: boolean;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label, small }) => {
  if (small) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-base sm:text-lg font-bold font-sans text-accent">{String(value).padStart(2, '0')}</span>
        <span className="text-[9px] sm:text-[10px] font-medium text-light-gray uppercase tracking-wider">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black-soft/90 backdrop-blur-md rounded-sm py-3 px-3 sm:py-4 sm:px-5 min-w-[65px] sm:min-w-[85px] border border-gold-subtle shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      <span className="text-2xl sm:text-4xl font-anton text-light tracking-wide leading-none">{String(value).padStart(2, '0')}</span>
      <span className="text-[9px] sm:text-xs font-semibold text-accent uppercase tracking-widest mt-1.5">{label}</span>
    </div>
  );
};


const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, small = false }) => {
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
    <div 
      role="timer"
      aria-label={hasEnded ? "O evento começou!" : `Faltam ${timeLeft.days} dias, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos e ${timeLeft.seconds} segundos para o evento`}
      className="flex flex-col items-center"
    >
      <div className={`flex justify-center items-center ${small ? 'space-x-4' : 'space-x-2 sm:space-x-4'}`} aria-hidden="true">
        <TimeUnit value={timeLeft.days} label={small ? "Dias" : "Dias"} small={small} />
        <TimeUnit value={timeLeft.hours} label={small ? "Hrs" : "Horas"} small={small} />
        <TimeUnit value={timeLeft.minutes} label={small ? "Min" : "Minutos"} small={small} />
        <TimeUnit value={timeLeft.seconds} label={small ? "Seg" : "Segundos"} small={small} />
      </div>
      {hasEnded && !small && (
        <p className="mt-4 text-2xl font-bold text-accent animate-pulse">
          O evento começou!
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;