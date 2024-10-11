// Lib Imports.
import { Nunito } from 'next/font/google';

// Styles.
import '../globals.css';

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
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
