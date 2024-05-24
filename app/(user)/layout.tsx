import { auth } from '@/auth';
import { ReactNode } from 'react';

export default async function Layout({
  admin,
  customer,
}: {
  admin: ReactNode;
  customer: ReactNode;
}) {
  const session = await auth();
  const isAdmin = session?.user.role == 'admin';
  return <>{isAdmin ? admin : customer}</>;
}
