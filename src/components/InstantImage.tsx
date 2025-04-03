
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface InstantImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  preload?: boolean;
  priority?: boolean;
}

const InstantImage: React.FC<InstantImageProps> = ({
  src,
  alt,
  className,
  preload = true,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Preload the image immediately on component mount
  useEffect(() => {
    if (preload && src) {
      const img = new Image();
      img.src = src;
      
      // If already cached, set as loaded
      if (img.complete) {
        setIsLoaded(true);
      } else {
        img.onload = () => {
          setIsLoaded(true);
        };
      }
    }
  }, [src, preload]);
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt || ""}
        className={cn("w-full h-full object-cover", isLoaded ? "opacity-100" : "opacity-0", className)}
        onLoad={() => setIsLoaded(true)}
        style={{ transition: 'opacity 0.2s ease-out' }}
        {...(priority ? { fetchPriority: "high" } as any : {})}
        {...props}
      />
    </div>
  );
};

export default InstantImage;
