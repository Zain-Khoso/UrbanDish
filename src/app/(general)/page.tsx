// Types.
import getCurrentUser from '../actions/getCurrentUser';

// Components.
import Navbar from '@/components/navbar';
import HeroBackground from './_components/HeroBackground';

// Home Page.
export default async function Page() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <header className="relative h-dvh w-dvw">
        <HeroBackground />

        <Navbar currentUser={currentUser} />
      </header>
    </>
  );
}
