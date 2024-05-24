import { IconButton } from '@mui/material';
import Image from 'next/image';
import profile from '@/app/assets/img/delba-de-oliveira.png';
import clsx from 'clsx';

export default function Profile({ className }: { className?: string }) {
  return (
    <IconButton
      className={clsx(
        'absolute right-5 h-10 w-10 overflow-hidden bg-red-600 max-md:bottom-5 md:right-[43px] md:top-5 md:h-16 md:w-16',
        className || '',
      )}
    >
      <Image
        src={profile}
        alt=""
        className="h-10 w-10 bg-blue-500 md:h-16 md:w-16"
      />
    </IconButton>
  );
}
