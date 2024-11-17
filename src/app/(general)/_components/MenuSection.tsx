'use client';

// Lib Imports.
import { motion } from 'motion/react';

// Components.
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import DishCard from '@/components/DishCard';

// Types.
type DataT = {
  id: number;
  picture: string;
  title: string;
  desc: string;
  price: number;
}[];

// Data.
const data: DataT = [
  {
    id: 1,
    picture: '/images/gallery/dishes/pizza.webp',
    title: 'Margherita Pizza',
    price: 1299,
    desc: '1 pizza + 2 drinks',
  },
  {
    id: 2,
    picture: '/images/gallery/dishes/pasta.webp',
    title: 'Spaghetti Carbonara',
    price: 1099,
    desc: '1 pasta dish + 1 drink',
  },
  {
    id: 3,
    picture: '/images/gallery/dishes/burger.webp',
    title: 'Classic Cheeseburger',
    price: 999,
    desc: '1 burger + 1 side + 1 drink',
  },
  {
    id: 4,
    picture: '/images/gallery/dishes/sushi.webp',
    title: 'Sushi Platter',
    price: 1599,
    desc: '12 pieces of sushi + miso soup',
  },
];

// Components.
export default function MenuSection() {
  return (
    <Container>
      <section className="space-y-6 px-4">
        <SectionHeading title="Best Dishes" heading="Some of our best cuisines." center />

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          {data.map(({ id, picture, title, desc, price }) => (
            <motion.div
              key={id}
              initial={{ scale: '50%' }}
              whileInView={{ scale: '100%' }}
              viewport={{ once: true }}
            >
              <DishCard picture={picture} title={title} desc={desc} price={price} />
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
}
