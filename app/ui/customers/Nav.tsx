'use client';

import { IconButton } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';

export default function Nav({ className }: { className?: string }) {
  const [selected, setSelected] = useState(0);
  return (
    <div
      className={clsx(
        'grid grid-flow-row content-center pl-5 max-md:grid-flow-col  max-md:justify-start max-md:gap-x-14 md:justify-center md:gap-y-10 md:[grid-area:nav]',
        className || '',
      )}
    >
      {[
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white/80 md:h-10 md:w-10 md:p-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          ),
        },
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white/80 md:h-10 md:w-10 md:p-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ),
        },
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white/80 md:h-10 md:w-10 md:p-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
      ].map(({ icon }, index) => (
        <IconButton
          key={index.toString()}
          onClick={() => {
            setSelected(index);
          }}
          className={clsx(
            '',
            index === selected
              ? 'bg-blue-700/90 hover:bg-blue-700/90'
              : 'bg-blue-900/90 hover:bg-blue-900/90',
          )}
        >
          {icon}
        </IconButton>
      ))}
    </div>
  );
}
