// Lib Imports.
import Link from 'next/link';

// Components.
import { Button } from './ui/button';

// Types.
type Props = {
  href: string;
  label: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'link' | 'default' | 'gradiant' | 'destructive' | 'outline' | 'secondary' | 'ghost';
};

// Component.
export default function ButtonLink({ href, label, size = 'default', variant = 'default' }: Props) {
  return (
    <Link href={href}>
      <Button type="button" variant={variant} size={size}>
        {label}
      </Button>
    </Link>
  );
}
