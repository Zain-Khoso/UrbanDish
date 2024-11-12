// Actions.
import getCurrentUser from '../actions/getCurrentUser';

// Components.
import Navbar from '@/components/navbar';
import HeroBackground from './_components/HeroBackground';
import HeroSection from './_components/HeroSection';
import ServicesSection from './_components/ServicesSection';
import AboutSection from './_components/AboutSection';
import ChefsSection from './_components/ChefsSection';
import TestimonialsSection from './_components/TestimonialsSection';
import MenuSection from './_components/MenuSection';

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

      <main className="my-12 flex flex-col gap-20">
        <ServicesSection />

        <AboutSection />

        <ChefsSection />

        <MenuSection />

        <TestimonialsSection />
      </main>
    </>
  );
}
