// Actions.
import getCurrentUser from '../actions/getCurrentUser';

// Components.
import Navbar from '@/components/navbar';
import HeroBackground from './_components/HeroBackground';
import HeroSection from './_components/HeroSection';
import ServicesSection from './_components/ServicesSection';
import AboutSection from './_components/AboutSection';

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

      <main className="my-12 flex flex-col gap-12">
        <ServicesSection />

        <AboutSection />
      </main>
    </>
  );
}
