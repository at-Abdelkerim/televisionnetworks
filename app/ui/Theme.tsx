'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import React, { ReactNode } from 'react';

declare module '@mui/material' {
  interface Palette {
    natural: Palette['primary'];
  }
  interface PaletteOptions {
    natural?: PaletteOptions['primary'];
  }
}

export default function Theme({ children }: { children: ReactNode }) {
  const theme = createTheme(
    {
      palette: {
        natural: {
          main: '#000222',
          light: '#fff',
          dark: '#000',
          contrastText: '#fff',
        },
      },
    },
    {},
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
