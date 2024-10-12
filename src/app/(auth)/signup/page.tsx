// Components.
import Heading from '@/components/Heading';
import SocialButton from '../_components/SocialButton';
import Separator from '@/components/ui/separator';
import SignUpForm from './_components/SignUpForm';

// Sign Up Page.
export default function SignUpPage() {
  return (
    <section className="flex h-full max-h-[800px] w-full flex-col items-center justify-center gap-8 bg-white p-8 md:mr-12 md:h-[80dvh] md:w-[480px] md:rounded-xl">
      <Heading title="Sign Up" subtitle="Reconnect with Innovators and Continue Your Journey!" />

      <div className="w-full space-y-2">
        <SocialButton type="Google" />
        <SocialButton type="Facebook" />
      </div>

      <Separator text="OR" />

      <SignUpForm />
    </section>
  );
}
