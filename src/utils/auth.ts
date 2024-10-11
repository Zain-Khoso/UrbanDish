// Lib Imports.
import NextAuth from 'next-auth';

// Next Auth configurations..
export const { auth, handlers, signIn, signOut } = NextAuth({ providers: [] });
