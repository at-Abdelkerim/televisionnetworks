'use client';

import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

export default function Menu() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="grid grid-cols-[auto_auto_auto_1fr] content-center md:[grid-area:menu]">
      {['recommended', 'popular', 'featured'].map((value, index) => (
        <Button
          key={index + ''}
          onClick={() => {
            setSelected(index);
          }}
          sx={{
            borderBottom:
              index === selected ? '3px solid #ffffff' : '3px solid #ffffff30',
          }}
          className="rounded-none bg-none font-bold capitalize text-white hover:bg-none"
        >
          {value}
        </Button>
      ))}
      <Box sx={{ borderBottom: '3px solid #ffffff30' }} className="" />
    </div>
  );
}
