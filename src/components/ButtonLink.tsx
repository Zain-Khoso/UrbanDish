// Lib Imports.
import Link from 'next/link';

// Components.
import { Button } from './ui/button';
import { cn } from '@/utils/helper_tailwind';

// Types.
type Props = {
  href: string;
  label: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'link' | 'default' | 'gradiant' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  widthFull?: boolean;
};

// Component.
export default function ButtonLink({
  href,
  label,
  size = 'default',
  variant = 'default',
  widthFull = false,
}: Props) {
  return (
    <Link href={href} className={cn(widthFull && 'w-full')}>
      <Button type="button" variant={variant} size={size} className={cn(widthFull && 'w-full')}>
        {label}
      </Button>
    </Link>
  );
}
