// Lib Imports.
import Image from 'next/image';

// Components.
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Muted } from '@/components/ui/typography';

// Type.
type DataT = {
  id: number;
  imageSrc: string;
  cousine: string;
  name: string;
}[];

// Data.
const data: DataT = [
  { id: 1, imageSrc: '/images/gallery/chefs/1.webp', cousine: 'Indian', name: 'Chef Rajeev Patel' },
  {
    id: 2,
    imageSrc: '/images/gallery/chefs/2.webp',
    cousine: 'Mexican',
    name: 'Chef Maria Hernandez',
  },
  { id: 3, imageSrc: '/images/gallery/chefs/3.webp', cousine: 'Italian', name: 'Chef Marco Rossi' },
  { id: 4, imageSrc: '/images/gallery/chefs/4.webp', cousine: 'Chinese', name: 'Chef Li Wei' },
];

// Component.
export default function ChefsSection() {
  return (
    <Container>
      <section className="space-y-8 px-4">
        <SectionHeading title="Master Chefs" heading="People who make your food." center />

        <div className="grid-row-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map(({ id, cousine, imageSrc, name }) => (
            <Card key={id}>
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                <Image
                  alt={name}
                  src={imageSrc}
                  width={200}
                  height={200}
                  className="rounded-full"
                />

                <div className="space-y-2 text-center">
                  <Muted>{cousine}</Muted>

                  <CardTitle>{name}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
