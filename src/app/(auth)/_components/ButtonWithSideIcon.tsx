'use client';

// Utils.
import { cn } from '@/utils/helper_tailwind';

// Components.
import { Button } from '@/components/ui/button';
import { IconType } from 'react-icons/lib';

// Types.
type Props = {
  type?: 'button' | 'submit' | 'reset';
  variant?:
    | 'default'
    | 'gradiant'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null;
  label?: string;
  icon?: IconType;
  side?: 'left' | 'right';
  disabled?: boolean;
  className?: string;
  classNameText?: string;
  classNameIcon?: string;
  onClick?: () => void;
};

// Component.
export default function ButtonWithSideIcon({
  type = 'button',
  variant = 'default',
  label,
  icon: Icon,
  side = 'right',
  disabled = false,
  className,
  classNameText,
  classNameIcon,
  onClick,
}: Props) {
  return (
    <Button
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={cn('flex w-full', side === 'right' ? 'flex-row' : 'flex-row-reverse', className)}
    >
      <span className={cn('flex-1', classNameText)}>{label}</span>

      {Icon && <Icon className={cn(classNameIcon)} />}
    </Button>
  );
}
