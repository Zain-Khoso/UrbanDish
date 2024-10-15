'use client';

// Lib Imports.
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

// Components.
import { Button } from './ui/button';

// Types.
import { User } from '@prisma/client';
type Props = {
  currentUser: User | null;
};

// Component.
export default function SignOutButton({ currentUser }: Props) {
  const router = useRouter();

  const handleClick = () => (currentUser ? signOut() : router.push('/signin'));

  return <Button onClick={handleClick}>{currentUser ? 'Sign out' : 'Sign in'}</Button>;
}
