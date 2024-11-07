// Lib Imports.
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary Initialization.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST Request handler.
export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const file = data.get('file') as string | null | undefined;
    const folder = data.get('folder') as string | null | undefined;

    if (!file || !folder) throw new Error('Incomplete Data');

    const uploadResult = await cloudinary.uploader.unsigned_upload(file, 'clvmvabd', { folder });

    return NextResponse.json({ url: uploadResult.secure_url });
  } catch {
    return NextResponse.error();
  }
}
