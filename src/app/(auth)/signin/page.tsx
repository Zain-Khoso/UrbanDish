// Components.
import Heading from '@/components/Heading';
import SocialButton from '../_components/SocialButton';
import Separator from '@/components/ui/separator';
import SignInForm from './_components/SignInForm';

// Types.
import { Metadata } from 'next';
import Link from 'next/link';

// Metadata.
export const metadata: Metadata = {
  title: 'Sign In',
  description:
    'Log in to your Urban Dish account to enjoy online ordering, table reservations, and exclusive offers.',
  keywords: [
    'Urban Dish',
    'login',
    'sign in',
    'account',
    'restaurant',
    'online ordering',
    'table reservations',
  ],
};

// Sign In Page.
export default function SignInPage() {
  return (
    <section className="flex h-full max-h-[800px] w-full flex-col items-center justify-center gap-8 bg-background p-2 md:mr-12 md:h-[80dvh] md:w-[480px] md:rounded-xl md:p-8">
      <Heading title="Welcome Back" subtitle="Login to access your orders and reservations." />

      <div className="w-full space-y-2">
        <SocialButton type="Google" />
        <SocialButton type="Facebook" />
      </div>

      <Separator text="OR" />

      <SignInForm />

      <p className="text-neutral-600">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="font-semibold text-sky-500/80">
          Sign Up
        </Link>
      </p>
    </section>
  );
}
