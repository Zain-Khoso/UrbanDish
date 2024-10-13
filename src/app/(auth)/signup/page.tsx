// Components.
import Heading from '@/components/Heading';
import SocialButton from '../_components/SocialButton';
import Separator from '@/components/ui/separator';
import SignUpForm from './_components/SignUpForm';

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
    </section>
  );
}
