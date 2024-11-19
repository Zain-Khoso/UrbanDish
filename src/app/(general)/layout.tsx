// Lib Imports.
import { Nunito } from 'next/font/google';

// Actions.
import getCurrentUser from '../actions/getCurrentUser';

// Providers.
import ReactHotToastProvider from '@/providers/toast.provider';

// Styles.
import '../globals.css';

// Components.
import Navbar from '@/components/navbar';

// Types.
import type { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: {
    template: '%s | Urban Dish',
    default: 'Urban Dish: A Modern Restaurant Website',
  },
  description:
    'Urban Dish is a vibrant restaurant offering a diverse menu and a modern atmosphere. Enjoy online ordering, table reservations, and explore our latest news and events.',
  keywords: [
    'Urban Dish',
    'restaurant',
    'online ordering',
    'table reservations',
    'menu',
    'food',
    'dining',
    'modern',
    'urban',
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
export default async function RootLayout({ children }: Readonly<ChildrenProp>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${font.className} bg-[#F3F4F6] antialiased`}>
        <ReactHotToastProvider />

        <Navbar currentUser={currentUser} />

        {children}
      </body>
    </html>
  );
}
