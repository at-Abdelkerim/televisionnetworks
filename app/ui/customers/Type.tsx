'use client';

import { Box, Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Type() {
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  return (
    <div className="grid auto-cols-min grid-flow-col auto-rows-min content-center gap-x-10 overflow-x-scroll  px-5 backdrop-blur-sm md:h-[350px] md:-translate-y-[180px] md:[grid-area:type] 2xl:md:-translate-y-[280px]">
      {[
        {
          label: "Live Tv's",
          desc: '+5000 channels',
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-20 w-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
              />
            </svg>
          ),
        },
        {
          label: 'Movies',
          desc: '+500 movies',
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-20 w-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
              />
            </svg>
          ),
        },
        {
          label: 'TV Shows',
          desc: '+900 Series',
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-20 w-20"
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
          label: 'Sports',
          desc: '+200 channels',
          icon: (
            <svg viewBox="0 0 100 100" strokeWidth={10} className="h-20 w-20">
              <g fill="currentColor" strokeWidth={10}>
                <path
                  strokeWidth={10}
                  d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 44.699 87.992 c -7.115 -0.049 -13.822 -1.837 -19.723 -4.956 c 12.973 -8.339 20.043 -20.911 20.992 -37.425 c 6.169 -3.315 12.353 -5.127 18.619 -5.455 C 67.683 60.9 60.997 76.991 44.699 87.992 z M 45.061 43.845 c -5.737 -3.61 -10.327 -8.189 -13.763 -13.698 c 15.56 -13.566 32.28 -15.658 51.066 -6.39 c 3.329 5.831 5.331 12.509 5.596 19.627 C 73.294 36.296 58.873 36.444 45.061 43.845 z M 80.414 20.649 c -18.132 -7.914 -34.986 -5.314 -50.158 7.752 C 26.91 22.428 24.84 15.435 24.065 7.46 C 30.265 3.988 37.403 2 45 2 C 59.676 2 72.652 9.395 80.414 20.649 z M 22.178 8.582 c 1.827 16.549 9.145 28.968 21.782 36.932 c -0.409 7.053 -1.966 13.363 -4.675 18.89 c -18.493 -6 -28.187 -18.747 -31.341 -41.179 C 11.449 17.281 16.343 12.252 22.178 8.582 z M 2 45 c 0 -6.76 1.573 -13.158 4.364 -18.854 c 2.373 14.237 8.769 32.333 31.971 40.046 c -3.514 6.357 -8.634 11.618 -15.338 15.734 C 10.433 74.411 2 60.674 2 45 z M 48.332 87.858 c 15.102 -11.351 21.242 -27.396 18.269 -47.756 c 6.985 -0.009 14.083 1.833 21.383 5.516 C 87.667 67.924 70.286 86.166 48.332 87.858 z"
                />
              </g>
            </svg>
          ),
        },
      ].map(({ label, desc, icon }, index) => (
        <Box
          key={index.toString()}
          onClick={() => {
            if (index === selected) {
              router.push('/show');
            } else {
              setSelected(index);
            }
          }}
          className={clsx(
            'relative my-5 grid w-56 grid-rows-[2fr_1fr] place-self-center rounded backdrop-blur-3xl ',
            index == selected
              ? 'bg-blue-900/50 pt-2 md:pt-5'
              : 'bg-gray-600/50',
          )}
          sx={index == selected ? { border: '2px solid #ffffff44' } : {}}
        >
          <Box className="m-2 grid h-32 place-content-center rounded bg-black/50 md:m-5">
            {icon}
          </Box>
          <Box
            className={clsx(
              'z-10 grid grid-cols-[2fr_1fr] bg-blue-950/50 backdrop-blur-3xl',
            )}
          >
            <Box className=" ">
              <Typography className="px-5 text-2xl font-bold">
                {label}
              </Typography>
              <Typography className="px-5 text-sm">{desc}</Typography>
            </Box>
            <Box className="grid place-content-center">
              {index == 2 && (
                <Button variant="contained" color="warning">
                  New
                </Button>
              )}
            </Box>
          </Box>
          {index == selected && (
            <span className="absolute inset-x-0 -bottom-1 z-0 h-2 w-20 place-self-center rounded bg-white"></span>
          )}
        </Box>
      ))}
    </div>
  );
}
