// Components.
import Container from '@/components/Container';
import { H1, P } from '@/components/ui/typography';
import ButtonLink from '@/components/ButtonLink';
import ServicesSection from './ServicesSection';

// Component.
export default function HeroSection() {
  return (
    <Container>
      <header className="w-full space-y-10">
        <section className="flex h-[60vh] w-full flex-col items-center justify-center gap-4">
          <H1 className="text-theme">Your Culinary Journey Starts Here.</H1>

          <P className="!m-0 max-w-[70ch]">
            Urban Dish is more than just a restaurant. It&apos;s a destination for food lovers,
            offering a diverse menu of mouthwatering dishes. From classic comfort food to innovative
            fusion cuisine, there&apos;s something for everyone. Our commitment to quality
            ingredients and exceptional service ensures an unforgettable dining experience.
          </P>

          <div className="mt-4 flex w-full max-w-[500px] flex-row-reverse gap-8">
            <ButtonLink href="/menu" label="Menu" widthFull variant="gradiant" size="lg" />

            <ButtonLink
              href="/reservations/new"
              label="Book a Table"
              widthFull
              variant="outline"
              size="lg"
            />
          </div>
        </section>

        <ServicesSection />
      </header>
    </Container>
  );
}
