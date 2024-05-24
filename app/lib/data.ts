import { User } from './definitions';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUser(phoneNumber: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { phoneNumber, password },
      select: {
        id: true,
        phoneNumber: true,
        role: true,
        firstName: true,
        middleName: true,
        lastName: true,
      },
    });
    if (user) return user;
    throw new Error();
  } catch (error) {
    console.log('Failed to fetch user. ', error);
    throw new Error('Failed to fetch user.');
  }
}
