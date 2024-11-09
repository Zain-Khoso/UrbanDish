// Actions.
import getCurrentUser from '../actions/getCurrentUser';

// Components.
import Navbar from '@/components/navbar';
import HeroBackground from './_components/HeroBackground';
import HeroSection from './_components/HeroSection';
import Services from './_components/Services';

// Home Page.
export default async function Page() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <header className="relative flex w-full flex-col md:h-dvh">
        <HeroBackground />

        <Navbar currentUser={currentUser} />

        <HeroSection />
      </header>

      <main className="flex flex-col gap-2">
        <Services />
      </main>
    </>
  );
}
