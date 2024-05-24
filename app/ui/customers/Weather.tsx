import { Box, IconButton, Typography } from '@mui/material';
import clsx from 'clsx';

export default function Weather({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'absolute top-5 grid h-10 grid-cols-[auto_auto_auto] content-center max-md:right-5 md:right-[120px] md:h-16',
        className || '',
      )}
    >
      <Typography className=" grid place-content-center px-4">
        5:30PM
      </Typography>
      <Box className="flex items-center px-4">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        </svg>
        <Typography className="  ">18 &deg;</Typography>
      </Box>
      <IconButton className=" h-10 bg-black/20 hover:bg-black/20">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-white/80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </IconButton>
    </div>
  );
}
