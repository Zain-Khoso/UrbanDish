'use client';

// Lib Imports.
import { motion } from 'motion/react';

// Icons.
import { MdCelebration, MdFamilyRestroom } from 'react-icons/md';
import { FaShippingFast, FaDollarSign } from 'react-icons/fa';

// Components.
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Types.
import { IconType } from 'react-icons';
type DataT = {
  id: number;
  Icon: IconType;
  title: string;
  desc: string;
}[];

// Data.
const data: DataT = [
  {
    id: 1,
    Icon: FaShippingFast,
    title: 'Speedy Delivery',
    desc: 'Craving your favorite dish? Our lightning-fast delivery ensures it reaches you hot and fresh.',
  },
  {
    id: 2,
    Icon: FaDollarSign,
    title: 'Reward Yourself',
    desc: 'Join our loyalty program and earn points on every purchase. Redeem rewards and enjoy exclusive perks.',
  },
  {
    id: 3,
    Icon: MdCelebration,
    title: 'Elevate Your Event',
    desc: "Let us cater your next event. From corporate functions to private parties, we've got you covered.",
  },
  {
    id: 4,
    Icon: MdFamilyRestroom,
    title: 'Family-Friendly Dining',
    desc: 'A warm and welcoming space for families to enjoy quality time and delicious food.',
  },
];

// Component.
export default function ServicesSection() {
  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.map(({ id, Icon, title, desc }) => (
        <motion.div
          key={id}
          initial={{ translateY: '50px' }}
          whileInView={{ translateY: 0 }}
          transition={{ type: 'spring' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <Card className="hover:bg-primary-gradiant group h-full w-full cursor-pointer transition">
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2 group-hover:text-white">
                <Icon className="group-hover:fill-white" />
                {title}
              </CardTitle>
              <CardDescription className="group-hover:text-white">{desc}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
