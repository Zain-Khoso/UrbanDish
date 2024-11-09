// Lib Imports.
import Image from 'next/image';

// Component.
export default function HeroBackground() {
  return (
    <div className="absolute left-0 top-0 -z-10 hidden h-dvh w-full md:block">
      <Image
        alt="Background"
        src="/images/hero-bg-image.webp"
        about="Background image for the hero section."
        fill
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/75"></div>
    </div>
  );
}
