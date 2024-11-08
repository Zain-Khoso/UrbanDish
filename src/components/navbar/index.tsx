// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Components.
import Container from '../Container';
import NavLink from './NavLink';
import ButtonLink from '../ButtonLink';

// Types.
import { User } from '@prisma/client';
type Props = {
  currentUser?: User | null;
};

// Main Navbar Component.
export default function Navbar({}: Props) {
  return (
    <Container>
      <nav className="z-10 flex w-full items-center justify-between">
        {/* Branding */}
        <Link href="/">
          <Image
            alt="Urban Dish"
            src="/brand/icon.png"
            about="Urban Dish brand logo in the navbar"
            width={80}
            height={80}
          />
        </Link>

        {/* Navigation */}
        <div className="flex flex-row gap-8">
          <NavLink href="/about" label="About" />
          <NavLink href="/menu" label="Menu" />
          <NavLink href="/blog" label="Blog" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* CTA */}
        <ButtonLink href="/reservations/new" variant="gradiant" label="Book a Table" />
      </nav>
    </Container>
  );
}
