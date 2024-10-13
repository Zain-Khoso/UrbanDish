// Lib Imports.
import { NextResponse } from 'next/server';

// Local Imports.
import prisma from '@/utils/prisma.db';

// POST route handler.
export async function POST(request: Request) {
  const { phone } = await request.json();

  if (!phone) return NextResponse.error();

  const user = await prisma.user.findUnique({ where: { phone } });

  if (user) return NextResponse.json({ isUnique: false });

  return NextResponse.json({ isUnique: true });
}
