import NavBar from '@/app/ui/admin/NavBar';
import SideBar from '@/app/ui/admin/SideBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden bg-white [grid-template-areas:'side_nav''side_content'] ">
      <SideBar />
      <NavBar />
      <div className="grid overflow-y-scroll p-5 [grid-area:content]">
        <div className="grid rounded-md px-10 pb-2 pt-10 shadow-[0px_0px_20px_0px_#00000033]">
          {children}
        </div>
      </div>
    </div>
  );
}
