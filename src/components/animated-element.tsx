
import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

type AnimationVariant = 
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
  duration?: number;
}

export default function AnimatedElement({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.1,
  duration = 700,
}: AnimatedElementProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  const getAnimationClasses = () => {
    if (!hasAnimated) {
      switch (variant) {
        case 'fade-up':
          return 'opacity-0 translate-y-10';
        case 'fade-down':
          return 'opacity-0 -translate-y-10';
        case 'fade-left':
          return 'opacity-0 translate-x-10';
        case 'fade-right':
          return 'opacity-0 -translate-x-10';
        case 'zoom-in':
          return 'opacity-0 scale-95';
        case 'zoom-out':
          return 'opacity-0 scale-105';
        default:
          return 'opacity-0 translate-y-10';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div 
      ref={ref} 
      className={cn(
        getAnimationClasses(),
        'transition-all',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
