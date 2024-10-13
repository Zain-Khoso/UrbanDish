// Lib Imports.
import { PrismaClient } from '@prisma/client';

// Glogal type for prisma client.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Handles prisma client behaviour according to the environment.
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
