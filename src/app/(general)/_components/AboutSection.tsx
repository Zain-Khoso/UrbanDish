// Lib Imports.
import Image from 'next/image';

// Components.
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import NumberHighlight from '@/components/NumberHighlight';
import ButtonLink from '@/components/ButtonLink';
import { P } from '@/components/ui/typography';

// Component.
export default function AboutSection() {
  return (
    <Container>
      <section className="flex w-full items-center justify-between gap-8 px-4 lg:flex-row-reverse">
        <div className="hidden grid-cols-2 grid-rows-2 place-items-center gap-2 lg:grid">
          <Image
            alt="1st Image"
            src="/images/gallery/locations/1.webp"
            width={250}
            height={250}
            className="rounded-sm"
          />

          <Image
            alt="1st Image"
            src="/images/gallery/locations/2.webp"
            width={200}
            height={200}
            className="rounded-sm"
          />

          <Image
            alt="1st Image"
            src="/images/gallery/locations/3.webp"
            width={220}
            height={220}
            className="rounded-sm"
          />

          <Image alt="1st Image" src="/images/gallery/locations/4.webp" width={200} height={200} />
        </div>

        <div>
          <SectionHeading title="About Us" heading="Available everywhere!" />

          <P className="max-w-[80ch] text-pretty">
            Urban Dish is more than just a restaurant; it&apos;s a culinary journey that spans the
            globe. With hundreds of locations worldwide, we&apos;re committed to bringing you the
            finest dining experience, no matter where you are.
          </P>

          <P className="max-w-[80ch] text-pretty">
            Indulge in our diverse menu, crafted with passion and precision. From classic comfort
            food to innovative fusion cuisine, there&apos;s something to satisfy every palate.
          </P>

          <div className="my-8 flex flex-col justify-between gap-6 sm:flex-row md:items-center md:gap-4">
            <NumberHighlight number={40} subtitle="Years" title="of Experience" />

            <NumberHighlight number={77} subtitle="Restaurant" title="Locations" />

            <NumberHighlight number={12} subtitle="Popular" title="Master Chefs" />
          </div>

          <ButtonLink href="/about" label="Learn More" size="lg" variant="gradiant" />
        </div>
      </section>
    </Container>
  );
}
