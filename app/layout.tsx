import '@/app/ui/global.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Theme from './ui/Theme';
import clsx from 'clsx';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'm-0 p-0')}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
