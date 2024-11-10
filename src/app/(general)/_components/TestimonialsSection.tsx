// Lib Imports.
import Image from 'next/image';

// Components.
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Muted } from '@/components/ui/typography';

// Types.
type DataT = {
  id: number;
  name: string;
  picture: string;
  location: string;
  text: string;
}[];

// Data.
const data: DataT = [
  {
    id: 1,
    name: 'Maria Hernandez',
    picture: '/images/gallery/testimonials/1.jpeg',
    location: 'Mexico',
    text: 'The food here is absolutely amazing! The flavors are bold and authentic.',
  },
  {
    id: 2,
    name: 'Marco Rossi',
    picture: '/images/gallery/testimonials/2.jpeg',
    location: 'Italy',
    text: 'This restaurant is a hidden gem. The pasta dishes are to die for.',
  },
  {
    id: 3,
    name: 'Li Wei',
    picture: '/images/gallery/testimonials/3.jpeg',
    location: 'China',
    text: "The dumplings are incredible! I've never tasted anything like it.",
  },
  {
    id: 4,
    name: 'Anya Petrova',
    picture: '/images/gallery/testimonials/4.jpeg',
    location: 'Russia',
    text: 'The borscht is so comforting and flavorful. Just like my grandmother used to make.',
  },
  {
    id: 5,
    name: 'Aiko Tanaka',
    picture: '/images/gallery/testimonials/5.webp',
    location: 'Japan',
    text: "The sushi is fresh and delicious. I'll definitely be back!",
  },
  {
    id: 6,
    name: 'David Smith',
    picture: '/images/gallery/testimonials/6.jpeg',
    location: 'United States',
    text: 'The burgers are juicy and the fries are crispy. Perfect comfort food.',
  },
  {
    id: 7,
    name: 'Fatima Ahmed',
    picture: '/images/gallery/testimonials/7.webp',
    location: 'Egypt',
    text: 'The falafel is so flavorful and the hummus is creamy and delicious.',
  },
  {
    id: 8,
    name: 'Pierre Dupont',
    picture: '/images/gallery/testimonials/8.webp',
    location: 'France',
    text: 'The croissants are flaky and buttery, just like in Paris.',
  },
  {
    id: 9,
    name: 'Anya Petrova',
    picture: '/images/gallery/testimonials/9.webp',
    location: 'Russia',
    text: 'The borscht is so comforting and flavorful. Just like my grandmother used to make.',
  },
  {
    id: 10,
    name: 'Aiko Tanaka',
    picture: '/images/gallery/testimonials/10.webp',
    location: 'Japan',
    text: "The sushi is fresh and delicious. I'll definitely be back!",
  },
  {
    id: 11,
    name: 'Michael Johnson',
    picture: '/images/gallery/testimonials/11.webp',
    location: 'United States',
    text: "The steaks are cooked to perfection. The best steak I've ever had.",
  },
  {
    id: 12,
    name: 'Carlos Hernandez',
    picture: '/images/gallery/testimonials/12.webp',
    location: 'Spain',
    text: 'The paella is amazing! So flavorful and filling.',
  },
];

// Component.
export default function TestimonialsSection() {
  return (
    <Container>
      <section className="space-y-6 px-4">
        <SectionHeading title="Testimonials" heading="Let us take care of you." center />

        <Carousel
          opts={{ loop: true }}
          className="mx-auto w-full md:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
        >
          <CarouselContent>
            {data.map(({ id, name, location, picture, text }) => (
              <CarouselItem
                key={id}
                className="basis-1/1 max-w-[280px] sm:max-w-none sm:basis-1/2 md:basis-1/3 2xl:basis-1/4"
              >
                <div className="h-full">
                  <Card className="h-full">
                    <CardHeader className="flex flex-col items-center gap-4">
                      <Image
                        alt={name + ' ' + location}
                        src={picture}
                        width={150}
                        height={150}
                        className="rounded-full"
                      />

                      <div>
                        <Muted>{location}</Muted>
                        <CardTitle>{name}</CardTitle>
                      </div>

                      <CardDescription>{text}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </section>
    </Container>
  );
}
