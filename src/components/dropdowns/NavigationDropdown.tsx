'use client';

// Lib Imports.
import Link from 'next/link';

// Links.
import { MdOutlineMenu } from 'react-icons/md';

// Components.
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import ButtonLink from '../ButtonLink';

// Component.
export default function NavigationMenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MdOutlineMenu size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-3 w-[200px]">
        <DropdownMenuItem>
          <Link href="/about" className="w-full">
            About
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/menu" className="w-full">
            Menu
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/blog" className="w-full">
            Blog
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/contact" className="w-full">
            Contact
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <ButtonLink href="reservations/new" label="Book a Table" variant="gradiant" widthFull />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
