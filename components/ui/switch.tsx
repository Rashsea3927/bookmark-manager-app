'use client';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Switch({ className, children, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot='switch'
      className={cn(
        'relative peer rounded-sm bg-neutral-300 dark:bg-neutral-500 inline-flex h-[30px] w-16 shrink-0 items-center border border-transparent shadow-xs transition-all',
        className
      )}
      {...props}
    >
      {children}
      <SwitchPrimitive.Thumb
        data-slot='switch-thumb'
        className={cn(
          'data-[state=unchecked]:bg-neutral-0 dark:data-[state=unchecked]:bg-transparent dark:data-[state=checked]:bg-neutral-600 pointer-events-none block w-[30px] h-[26px] rounded-sm ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-[2px]'
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
