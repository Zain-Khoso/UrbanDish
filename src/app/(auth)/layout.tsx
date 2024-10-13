// Lib Imports.
import Image from 'next/image';
import { Nunito } from 'next/font/google';

// Styles.
import '../globals.css';

// Providers.
import ReactHotToastProvider from '@/providers/toast.provider';

// Types.
import type { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: {
    template: '%s | Urban Dish Authentication',
    default: 'Urban Dish: Sign In or Create Account',
  },
  description:
    'Access your Urban Dish account to enjoy online ordering, table reservations, and explore our latest news and events. Sign in or create a new account to get started.',
  keywords: [
    'Urban Dish',
    'authentication',
    'login',
    'sign up',
    'restaurant',
    'online ordering',
    'table reservations',
    'account creation',
  ],
  applicationName: 'Urban Dish',
  referrer: 'origin',
  creator: 'Zain Khoso',
  publisher: 'Zain Khoso',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  authors: [
    {
      name: 'Zain Khoso',
      url: 'https://www.linkedin.com/in/zain-khoso/',
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};

// Global Font Setup.
const font = Nunito({ subsets: ['latin'] });

// General Section Root Layout.
export default function RootLayout({ children }: Readonly<ChildrenProp>) {
  return (
    <html lang="en">
      <body className={`${font.className} relative h-dvh w-dvw antialiased`}>
        <Image
          fill
          sizes="(max-width: 768px) 0, (max-width: 1280px) 1280px, 1980px"
          alt="Authentication Background Image"
          src="/images/auth-bg-image.webp"
          className="absolute inset-0 -z-10"
        />

        <main className="flex h-full w-full flex-col items-end justify-center md:p-4">
          {children}
        </main>

        <ReactHotToastProvider />
      </body>
    </html>
  );
}
