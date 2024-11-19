'use client';

// Lib Imports.
import Image from 'next/image';

// Icons.
import { TbHeart, TbShoppingCart } from 'react-icons/tb';
import { BiFork } from 'react-icons/bi';

// Components.
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Lead } from '@/components/ui/typography';
import ButtonWithSideIcon from './ButtonWithSideIcon';

// Types.
type Props = {
  picture: string;
  title: string;
  desc: string;
  price: number;
};

// Component.
export default function DishCard({ picture, title, desc, price }: Props) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="relative flex flex-col gap-2 p-0 pb-4">
        <div className="overflow-hidden">
          <Image
            alt="Dish Picture"
            src={picture}
            width={300}
            height={300}
            className="w-full transition group-hover:scale-110"
          />
        </div>

        <div className="absolute -top-[6px] left-1/2 flex -translate-x-1/2 flex-row gap-1">
          <span className="bg-primary-gradiant h-6 w-2 rounded-b-sm"></span>
          <span className="bg-primary-gradiant h-6 w-2 rounded-b-sm"></span>
          <span className="bg-primary-gradiant h-6 w-2 rounded-b-sm"></span>
        </div>

        <button className="absolute right-4 top-2">
          <TbHeart size={24} className="fill-neutral-200 stroke-neutral-600" />
        </button>

        <div className="px-6">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <Lead className="text-theme font-bold">Rs {price}</Lead>
      </CardContent>

      <CardFooter className="relative flex flex-row-reverse gap-2">
        <ButtonWithSideIcon variant="gradiant" label="Buy Now" icon={BiFork} />
        <ButtonWithSideIcon
          variant="outline"
          label="Add to Cart"
          icon={TbShoppingCart}
          side="left"
        />
      </CardFooter>
    </Card>
  );
}
