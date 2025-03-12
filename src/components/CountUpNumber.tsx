
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CountUpNumberProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  className?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0,
  className
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTimestamp: number;
          const startValue = 0;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * (end - startValue) + startValue);
            setCount(currentCount);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).replace(/,/g, separator);
  };

  return (
    <div ref={targetRef} className={cn(className)}>
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
};

export default CountUpNumber;
