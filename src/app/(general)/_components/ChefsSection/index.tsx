// Components.
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ChefCards from './ChefCards';

// Component.
export default function ChefsSection() {
  return (
    <Container>
      <section className="space-y-8 px-4">
        <SectionHeading title="Master Chefs" heading="People who make your food." center />

        <ChefCards />
      </section>
    </Container>
  );
}
