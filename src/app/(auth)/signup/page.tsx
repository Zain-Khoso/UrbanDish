// Lib Imports.
import Link from 'next/link';

// Components.
import Heading from '@/components/Heading';
import SocialButton from '../_components/SocialButton';
import Separator from '@/components/ui/separator';
import SignUpForm from './_components/SignUpForm';

// Types.
import { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: 'Sign Up Now',
  description:
    'Join the Urban Dish community and create your account to enjoy online ordering, table reservations, and exclusive offers.',
  keywords: [
    'Urban Dish',
    'signup',
    'create account',
    'register',
    'join',
    'restaurant',
    'online ordering',
    'table reservations',
  ],
};

// Sign Up Page.
export default function SignUpPage() {
  return (
    <section className="flex h-full max-h-[800px] w-full flex-col items-center justify-center gap-8 bg-background p-2 md:mr-12 md:h-[80dvh] md:w-[480px] md:rounded-xl md:p-8">
      <Heading title="Create Your Account" subtitle="Join our growing community of food lovers." />

      <div className="w-full space-y-2">
        <SocialButton type="Google" />
        <SocialButton type="Facebook" />
      </div>

      <Separator text="OR" />

      <SignUpForm />

      <p className="text-neutral-600">
        Already have an account?{' '}
        <Link href="/signin" className="font-semibold text-sky-500/80">
          Sign In
        </Link>
      </p>
    </section>
  );
}
