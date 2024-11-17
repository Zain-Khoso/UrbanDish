// Lib Imports.
import Image from 'next/image';

// Components.
import ButtonLink from '@/components/ButtonLink';
import { H1, P } from '@/components/ui/typography';

// Component.
export default function HeroSection() {
  return (
    <section className="mx-auto flex h-full w-full max-w-[1440px] flex-1 flex-row justify-evenly gap-4 overflow-hidden p-4 md:items-center">
      <div className="flex flex-col items-start gap-4">
        <H1 className="space-y-2 text-wrap md:text-white">
          <span className="text-primary-gradiant block">Urban Dish:</span>
          <span className="block max-w-[18ch]">Your Culinary Journey Starts Here.</span>
        </H1>

        <P className="!m-0 max-w-[70ch] md:text-white">
          Urban Dish is more than just a restaurant. It&apos;s a destination for food lovers,
          offering a diverse menu of mouthwatering dishes. From classic comfort food to innovative
          fusion cuisine, there&apos;s something for everyone. Our commitment to quality ingredients
          and exceptional service ensures an unforgettable dining experience.
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
      </div>

      <div className="hidden aspect-square w-1/3 animate-spin-slow lg:block">
        <Image
          alt="Rotating Pizza"
          about="Hero section decoration image"
          src="/images/hero-section-dish.webp"
          fill
          sizes="(max-width: 768px) 0vw, 30vw"
          priority
          className="aspect-square"
        />
      </div>
    </section>
  );
}
