// Lib Imports.
import { NextResponse } from 'next/server';

// Local Imports.
import prisma from '@/utils/prisma.db';

// POST route handler.
export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) return NextResponse.error();

  const user = await prisma.user.findUnique({ where: { email } });

  if (user) return NextResponse.json({ isUnique: false });

  return NextResponse.json({ isUnique: true });
}
