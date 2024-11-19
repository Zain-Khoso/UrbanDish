// Components.
import HeroSection from './_components/HeroSection';
import AboutSection from './_components/AboutSection';
import ChefsSection from './_components/ChefsSection';
import TestimonialsSection from './_components/TestimonialsSection';
import MenuSection from './_components/MenuSection';
import Footer from '@/components/footer';

// Home Page.
export default async function Page() {
  return (
    <>
      <HeroSection />

      <main className="my-12 flex flex-col gap-20">
        <AboutSection />

        <ChefsSection />

        <MenuSection />

        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
