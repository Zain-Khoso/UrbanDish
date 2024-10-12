'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/utils/helper_tailwind';

// Types.
type Props = {
  text?: string;
  separatorClassName?: string;
  orientation?: 'vertical' | 'horizontal';
  textClassName?: string;
};

const RootSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    {...props}
  />
));
RootSeparator.displayName = SeparatorPrimitive.Root.displayName;

// Custom Separator Component based on shadcn.
export default function Separator({ text, separatorClassName, textClassName, orientation }: Props) {
  return (
    <div className="relative w-full">
      <RootSeparator className={separatorClassName} orientation={orientation} />

      {text ? (
        <span
          className={cn(
            'absolute right-1/2 top-1/2 -translate-y-1/2 bg-background px-1 text-sm',
            textClassName
          )}
        >
          {text}
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export { Separator };
