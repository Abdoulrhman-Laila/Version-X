'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValueEvent, useSpring } from 'framer-motion';

import type { CounterStat } from '@/types/stats';

interface AnimatedCounterProps {
  stat: CounterStat;
}

export default function AnimatedCounter({ stat }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 75,
    damping: 20,
  });

  useMotionValueEvent(spring, 'change', (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(stat.value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, stat.value]);

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      {displayValue}
      {stat.suffix}
    </span>
  );
}
