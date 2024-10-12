'use client';

// Icons.
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

// Components.
import { Button } from '@/components/ui/button';

// Types.
type Props = {
  type: 'Google' | 'Facebook';
};

// Component.
export default function SocialButton({ type }: Props) {
  return (
    <Button variant="outline" className="group flex w-full flex-row">
      {type === 'Google' ? <FcGoogle size={20} /> : <FaFacebook size={20} fill="#1877f2" />}

      <span className="flex-1 font-semibold">Continue with {type}</span>

      <FaArrowRight className="-translate-x-2 fill-neutral-600 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
    </Button>
  );
}
