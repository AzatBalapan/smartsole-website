
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <ShadcnButton
      className={cn(className)}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
