'use client';

import { logout } from '@/app/lib/action';
import { Button, IconButton, Popover, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  return (
    <div className="flex h-16 items-center  justify-between bg-[#000222] px-4 text-white [grid-area:nav]">
      <p className="px-10 text-xl font-[600] capitalize">
        {pathname.split('/')[1]}
      </p>
      <div className="flex items-center">
        <Button className="">
          <svg viewBox="0 0 46 50" fill="none" className="h-5 w-5">
            <g clip-path="url(#clip0_30_454)">
              <path
                d="M45.2448 40.2929L44.7315 39.84C43.2753 38.5426 42.0007 37.0547 40.9422 35.4167C39.7862 33.156 39.0933 30.6872 38.9042 28.1552V20.6975C38.9142 16.7204 37.4715 12.8766 34.8473 9.88825C32.2231 6.89987 28.598 4.97262 24.653 4.4686V2.52114C24.653 1.98662 24.4406 1.47399 24.0627 1.09603C23.6847 0.718074 23.1721 0.505737 22.6376 0.505737C22.1031 0.505737 21.5904 0.718074 21.2125 1.09603C20.8345 1.47399 20.6222 1.98662 20.6222 2.52114V4.49879C16.7125 5.03914 13.1312 6.97804 10.5415 9.95638C7.95171 12.9347 6.52907 16.7507 6.53703 20.6975V28.1552C6.34795 30.6872 5.65505 33.156 4.49899 35.4167C3.45865 37.0507 2.20459 38.5383 0.770121 39.84L0.256836 40.2929V44.5501H45.2448V40.2929Z"
                fill="white"
              />
              <path
                d="M18.7803 46.1353C18.9127 47.0922 19.3868 47.9689 20.1152 48.6035C20.8437 49.2381 21.7771 49.5876 22.7431 49.5876C23.7092 49.5876 24.6426 49.2381 25.371 48.6035C26.0994 47.9689 26.5736 47.0922 26.706 46.1353H18.7803Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_30_454">
                <rect width="45.6522" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
        <div className="relative">
          <IconButton
            onClick={({ currentTarget }) => {
              setAnchorEl(currentTarget);
            }}
            aria-describedby="profile"
            className="rounded-full bg-white "
          >
            <svg viewBox="0 0 44 44" fill="none" className="h-3 w-3">
              <ellipse
                cx="21.2281"
                cy="13.343"
                rx="8.75972"
                ry="8.75973"
                stroke="#807A7A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.3334 34.2858C7.33105 33.67 7.46877 33.0617 7.73615 32.507C8.5752 30.8289 10.9413 29.9395 12.9047 29.5368C14.3207 29.2346 15.7563 29.0327 17.2007 28.9327C19.8749 28.6977 22.5646 28.6977 25.2388 28.9327C26.6831 29.0339 28.1186 29.2357 29.5348 29.5368C31.4982 29.9395 33.8643 30.745 34.7034 32.507C35.2411 33.6378 35.2411 34.9506 34.7034 36.0814C33.8643 37.8434 31.4982 38.6489 29.5348 39.0349C28.1204 39.3496 26.6844 39.5571 25.2388 39.6558C23.0622 39.8403 20.8754 39.8739 18.6942 39.7565C18.1908 39.7565 17.7041 39.7565 17.2007 39.6558C15.7605 39.5583 14.33 39.3508 12.9215 39.0349C10.9413 38.6489 8.59198 37.8434 7.73615 36.0814C7.47014 35.5202 7.33255 34.9068 7.3334 34.2858Z"
                stroke="#807A7A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </IconButton>
          <Popover
            id={Boolean(anchorEl) ? 'profile' : undefined}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => {
              setAnchorEl(null);
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className="grid place-content-center p-2">
              <svg viewBox="0 0 102 102" fill="none" className="h-10 w-10">
                <rect
                  x="1.5"
                  y="1"
                  width="99"
                  height="100"
                  rx="49.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M66.3166 37.9915C66.3166 46.1051 59.5033 52.6108 50.9998 52.6108C42.4992 52.6108 35.6831 46.1051 35.6831 37.9915C35.6831 29.878 42.4992 23.375 50.9998 23.375C59.5033 23.375 66.3166 29.878 66.3166 37.9915ZM50.9998 78.625C38.4501 78.625 27.854 76.6774 27.854 69.1634C27.854 61.6464 38.5167 59.7679 50.9998 59.7679C63.5524 59.7679 74.1457 61.7155 74.1457 69.2297C74.1457 76.7465 63.483 78.625 50.9998 78.625Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="grid auto-rows-min justify-center text-black">
              <Typography className="whitespace-nowrap px-4 text-center text-lg font-bold">
                Abdelkerim Ahmed
              </Typography>
              <Typography className="text-center text-sm">
                +251945467896
              </Typography>
            </div>
            <form action={logout} className=" p-2">
              <Button type="submit" color="error" fullWidth>
                logout
              </Button>
            </form>
          </Popover>
        </div>
      </div>
    </div>
  );
}
