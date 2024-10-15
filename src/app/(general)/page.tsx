// Lib Imports.
import Image from 'next/image';

// Types.
import getCurrentUser from '../actions/getCurrentUser';

// Components.
import { H1, P } from '@/components/ui/typography';
import Counter from '@/components/Counter';
import SignOutButton from '@/components/SignOutButton';

// Home Page.
export default async function Page() {
  const currentUser = await getCurrentUser();

  return (
    <main className="flex h-dvh w-dvw flex-col items-center justify-center gap-4">
      <Image alt="Brand Logo" src="/brand/icon.png" width={250} height={25} />

      <H1>Urban Dish</H1>
      <P>
        This site is currently under development. You can play with the button in the meal while.
      </P>

      <SignOutButton currentUser={currentUser} />

      <Counter />
    </main>
  );
}
