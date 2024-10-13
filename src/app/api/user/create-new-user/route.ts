// Lib Imports.
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

// Local Imports.
import prisma from '@/utils/prisma.db';

export async function POST(request: Request) {
  try {
    const { email, phone, name, password, address, image } = await request.json();

    if (!email || !phone || !name || !password || !address) return NextResponse.error();

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, phone, name, hashedPassword, address, image },
    });

    return NextResponse.json(user);
  } catch {
    return NextResponse.error();
  }
}
