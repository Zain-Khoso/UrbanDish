'use client';

// Lib Imports.
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';

// Components.
import NumberHighlight from '@/components/NumberHighlight';

// Component.
export default function NumberHighlights() {
  const ref = useRef<null | HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxYears = 40;
  const maxRestaurants = 77;
  const maxChefs = 12;

  const [years, setYears] = useState(0);
  const [restaurants, setRestaurants] = useState(0);
  const [chefs, setChefs] = useState(0);

  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    if (intervalRef.current) {
      if (years >= maxYears && restaurants >= maxRestaurants && chefs >= maxChefs)
        clearInterval(intervalRef.current);

      return;
    }

    intervalRef.current = setInterval(() => {
      setYears((years) => (years < maxYears ? ++years : years));
      setRestaurants((restaurants) => (restaurants < maxRestaurants ? ++restaurants : restaurants));
      setChefs((chefs) => (chefs < maxChefs ? ++chefs : chefs));
    }, 25);

    return () => {};
  }, [inView, years, chefs, restaurants]);

  return (
    <div
      ref={ref}
      className="my-8 flex flex-col justify-between gap-6 sm:flex-row md:items-center md:gap-4"
    >
      <NumberHighlight number={years} subtitle="Years" title="of Experience" />

      <NumberHighlight number={restaurants} subtitle="Restaurant" title="Locations" />

      <NumberHighlight number={chefs} subtitle="Popular" title="Master Chefs" />
    </div>
  );
}
