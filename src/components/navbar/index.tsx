// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Components.
import Container from '../Container';
import NavLink from './NavLink';
import ButtonLink from '../ButtonLink';
import MobileNav from './MobileNav';

// Types.
import { User } from '@prisma/client';
type Props = {
  currentUser?: User | null;
};

// Main Navbar Component.
export default function Navbar({ currentUser }: Props) {
  return (
    <Container>
      <nav className="z-10 mb-8 flex w-full items-center justify-between pr-4">
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

        {/* Mobile/Tablet Navigation */}
        <MobileNav currentUser={currentUser} />

        {/* Desktop Navigation */}
        <div className="hidden flex-row gap-8 md:flex">
          <NavLink href="/about" label="About" />
          <NavLink href="/menu" label="Menu" />
          <NavLink href="/blog" label="Blog" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ButtonLink href="/reservations/new" variant="gradiant" label="Book a Table" />
        </div>
      </nav>
    </Container>
  );
}
