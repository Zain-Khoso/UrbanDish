// Lib Imports.
import Link from 'next/link';

// Types.
type Props = {
  href: string;
  label: string;
};

// Component.
export default function NavLink({ href, label }: Props) {
  return (
    <Link href={href} className="hover:text-theme text-lg font-bold transition">
      {label}
    </Link>
  );
}
