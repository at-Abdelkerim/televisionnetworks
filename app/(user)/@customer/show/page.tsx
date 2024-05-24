import React from 'react';
import Image from 'next/image';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Menu from '@/app/ui/customers/Menu';
import Nav from '@/app/ui/customers/Nav';
import Profile from '@/app/ui/customers/Profile';
import Weather from '@/app/ui/customers/Weather';
import arrival from '@/app/assets/img/arrival.jpeg';
import avatar from '@/app/assets/img/avatar.jpeg';
import barbarians from '@/app/assets/img/barbarians.jpeg';
import fury from '@/app/assets/img/fury.jpeg';
import kandahar from '@/app/assets/img/kandahar.jpeg';
import tears from '@/app/assets/img/tears.jpeg';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative grid h-screen grid-cols-1 grid-rows-[80px_50px_1fr] bg-blue-950 text-white md:grid-cols-[200px_1fr] md:grid-rows-[150px_100px_1fr] md:[grid-template-areas:'nav_header''nav_menu''nav_content'] ">
      <Link href={'/'}>
        <IconButton className="absolute left-2 top-5 bg-blue-900 text-white hover:bg-blue-900 md:left-20 md:top-10">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 md:h-10 md:w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </IconButton>
      </Link>
      <Nav className="max-md:hidden" />
      <div className="relative grid content-center md:[grid-area:header]">
        <Typography className="max-md:pl-16">Movies</Typography>
        <Weather className="right-[120px] " />
        <Profile className="right-5 top-5" />
      </div>
      <Menu />
      <div className=" grid auto-cols-min grid-flow-col content-center overflow-x-scroll p-5 md:gap-x-5 md:[grid-area:content]">
        {[
          { img: arrival, title: 'arrival' },
          { img: avatar, title: 'avatar' },
          { img: barbarians, title: 'barbarians' },
          { img: fury, title: 'fury' },
          { img: kandahar, title: 'kandahar' },
          { img: tears, title: 'tears' },
        ].map(({ img, title }, index) => (
          <div key={index + ''} className="relative h-80 w-60 rounded-md ">
            <Image src={img} alt="" className="h-full w-full rounded-md" />
            <div className="absolute inset-x-0 bottom-0 top-0 grid content-end rounded-md bg-gradient-to-t from-blue-900 to-transparent">
              <Typography className="px-5 text-xl font-extrabold">
                {title}
              </Typography>
              <div className="mx-5 grid translate-y-[50%] grid-flow-col justify-evenly rounded-full bg-sky-900/80  backdrop-blur-3xl">
                <IconButton className="text-white">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </IconButton>
                <IconButton className="text-white">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </IconButton>
                <IconButton className="text-white">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
            <Typography className="absolute right-1 top-1 rounded-full bg-black/40 px-2 text-white backdrop-blur">
              2h 22m
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
