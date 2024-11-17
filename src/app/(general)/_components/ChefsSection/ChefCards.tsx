'use client';

// Lib Imports.
import Image from 'next/image';
import { motion } from 'motion/react';

// Components.
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
export default function ChefCards() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-4 lg:grid-rows-1">
      {data.map(({ id, cousine, imageSrc, name }) => (
        <motion.div
          key={id}
          initial={{ scale: '50%' }}
          whileInView={{ scale: '100%' }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader className="group flex flex-col items-center justify-center gap-4">
              <div className="w-full max-w-[200px] overflow-hidden rounded-full">
                <Image
                  alt={name}
                  src={imageSrc}
                  width={200}
                  height={200}
                  className="w-full transition group-hover:scale-110"
                />
              </div>

              <div className="space-y-2 text-center">
                <Muted>{cousine}</Muted>

                <CardTitle>{name}</CardTitle>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
