import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Button } from './ui/button';

const GeneralButton = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <Button
      variant='outline'
      className={cn(
        'border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100',
        className
      )}
    >
      {children}
    </Button>
  );
};

export default GeneralButton;
