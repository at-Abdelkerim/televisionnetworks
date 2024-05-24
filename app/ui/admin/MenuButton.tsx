'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function MenuButton({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={`/${name}`}
      className={clsx(
        'flex w-full items-center  gap-x-4  px-16 py-2 no-underline  ',
        {
          'bg-[#000222] text-white': pathname === `/${name}`,
          'text-black hover:bg-[#181A414D]': pathname !== `/${name}`,
        },
      )}
    >
      {icon}
      <span className="text-xl font-[600] capitalize ">{name}</span>
    </Link>
  );
}
