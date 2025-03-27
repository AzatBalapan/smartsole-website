
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface InstantImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  preload?: boolean;
}

const InstantImage: React.FC<InstantImageProps> = ({
  src,
  alt,
  className,
  preload = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Preload the image immediately
  if (preload && src) {
    const img = new Image();
    img.src = src;
  }
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt || ""}
        className={cn("w-full h-full object-cover", isLoaded ? "opacity-100" : "opacity-0", className)}
        onLoad={() => setIsLoaded(true)}
        style={{ transition: 'opacity 0.2s ease-out' }}
        {...props}
      />
    </div>
  );
};

export default InstantImage;
