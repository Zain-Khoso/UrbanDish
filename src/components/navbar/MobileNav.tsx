// Icons.
import { MdMenu, MdLabel, MdOutlineRestaurant, MdPhone, MdFastfood } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';

// Components.
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import ButtonLink from '../ButtonLink';
import SignOutButton from '../SignOutButton';

// Types.
import { User } from '@prisma/client';
type Props = {
  currentUser?: User | null;
};

// Component.
export default function MobileNav({ currentUser }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <MdMenu />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-8">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2">
          <ButtonLink href="/about" variant="secondary" label="About" icon={MdLabel} widthFull />

          <ButtonLink
            href="/menu"
            variant="secondary"
            label="Menu"
            icon={MdOutlineRestaurant}
            widthFull
          />

          <ButtonLink
            href="/reservations/new"
            variant="secondary"
            label="Book a Table"
            icon={MdFastfood}
            widthFull
          />

          <ButtonLink href="/blog" variant="secondary" label="Blog" icon={TfiWrite} widthFull />

          <ButtonLink
            href="/contact"
            variant="secondary"
            label="Contact"
            icon={MdPhone}
            widthFull
          />
        </div>

        <SheetFooter className="mt-auto">
          <SignOutButton currentUser={currentUser} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
