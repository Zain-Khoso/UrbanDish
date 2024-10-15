// Local Imports.
import prisma from '@/utils/prisma.db';

// Utils.
import { getSession } from '@/utils/getSession';

// This action is used to get user data on the server.
export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch {
    return null;
  }
}
