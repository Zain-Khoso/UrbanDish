// Lib Imports.
import Link from 'next/link';

// Components.
import { Button } from './ui/button';
import { cn } from '@/utils/helper_tailwind';

// Types.
import { IconType } from 'react-icons';
type Props = {
  href: string;
  label: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'link' | 'default' | 'gradiant' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  widthFull?: boolean;
  icon?: IconType;
  iconSide?: 'left' | 'right';
};

// Component.
export default function ButtonLink({
  href,
  label,
  size = 'default',
  variant = 'default',
  widthFull = false,
  icon: Icon,
  iconSide = 'left',
}: Props) {
  return (
    <Link href={href} className={cn(widthFull && 'w-full')}>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={cn(
          'flex',
          widthFull && 'w-full',
          iconSide === 'left' ? 'flex-row-reverse' : 'flex-row'
        )}
      >
        <span className="flex-1 text-center">{label}</span>

        {Icon && <Icon />}
      </Button>
    </Link>
  );
}
