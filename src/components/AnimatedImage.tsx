
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  revealAnimation?: 'fade' | 'blur' | 'slide-up' | 'scale' | 'slide-right' | 'slide-left';
  delay?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  revealAnimation = 'blur',
  delay = 0,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`image-${src}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [src]);
  
  const animationClasses = {
    'fade': 'opacity-0 animate-fade-in',
    'blur': 'opacity-0 animate-blur-in',
    'slide-up': 'opacity-0 animate-slide-up',
    'scale': 'opacity-0 animate-scale-in',
    'slide-right': 'opacity-0 animate-slide-right',
    'slide-left': 'opacity-0 animate-slide-left'
  };
  
  return (
    <div id={`image-${src}`} className="relative overflow-hidden">
      <div 
        className={cn(
          "transition-all duration-500 ease-out w-full h-full",
          isInView && animationClasses[revealAnimation],
          {
            [`animation-delay-${delay}`]: delay > 0
          }
        )}
      >
        <img
          src={src}
          alt={alt || ""}
          className={cn("w-full h-full object-cover", className)}
          onLoad={() => setIsLoaded(true)}
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out'
          }}
          {...props}
        />
        {!isLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
      </div>
    </div>
  );
};

export default AnimatedImage;
