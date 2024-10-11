// Lib Imports.
import { Nunito } from 'next/font/google';

// Styles.
import '../globals.css';

// Types.
import type { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: {
    template: '% | Urban Dish',
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
export default function RootLayout({ children }: Readonly<ChildrenProp>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
