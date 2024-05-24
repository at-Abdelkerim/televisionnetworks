import React from 'react';
import Type from '@/app/ui/customers/Type';
import Channel from '@/app/ui/customers/Channel';
import Nav from '@/app/ui/customers/Nav';
import Land from '@/app/ui/customers/Land';
import Logo from '@/app/ui/customers/Logo';
import Weather from '@/app/ui/customers/Weather';
import Profile from '@/app/ui/customers/Profile';

export default async function Page() {
  return (
    <div className="relative grid h-screen overflow-hidden bg-blue-950 text-white max-md:grid-rows-[1fr_100px_250px_80px] md:grid-cols-[150px_300px_1fr] md:grid-rows-[1fr_200px] md:[grid-template-areas:'nav_channel_land''nav_channel_type']">
      <Land />
      <Channel />
      <Type />
      <Nav />
      <Logo />
      <Weather />
      <Profile />
    </div>
  );
}
