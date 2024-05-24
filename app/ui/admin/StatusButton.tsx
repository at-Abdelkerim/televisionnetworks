import { toggleStatus } from '@/app/lib/action';
import { Button } from '@mui/material';
import clsx from 'clsx';
import { useFormState } from 'react-dom';

export default function StatusButton({
  success,
  id,
}: {
  success: boolean;
  id: string;
}) {
  const [state, dispatch] = useFormState(toggleStatus, id);
  return (
    <form action={dispatch}>
      <Button
        type="submit"
        endIcon={
          <div
            className={clsx(
              'rounded-full ',
              success ? 'bg-green-300 pl-5' : 'bg-red-300 pr-5',
            )}
          >
            <div
              className={clsx(
                'scale-125 rounded-full p-2',
                success ? 'bg-green-500' : 'bg-red-500',
              )}
            />
          </div>
        }
        variant="contained"
        color={success ? 'success' : 'error'}
        size="small"
        disableElevation
        className={clsx(
          'w-32 justify-around capitalize',
          success
            ? 'bg-[#0080001A] text-[#008000] hover:bg-[#0080001A]'
            : 'bg-[#FF00001A] text-[#FF0000] hover:bg-[#FF00001A]',
          {},
        )}
      >
        <span className="flex items-center">
          {success ? (
            <svg viewBox="0 0 34 25" fill="none" className="h-3 w-3  ">
              <path
                d="M11.7791 24.8154L0.0293884 13.0657L2.96681 10.1283L11.7791 18.9406L30.692 0.02771L33.6294 2.96513L11.7791 24.8154Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 35 36" fill="none" className="h-3 w-3  ">
              <path
                d="M15.75 23.25H19.25V26.75H15.75V23.25ZM15.75 9.25H19.25V19.75H15.75V9.25ZM17.5 0.5C7.8225 0.5 0 8.375 0 18C0 22.6413 1.84374 27.0925 5.12563 30.3744C6.75066 31.9994 8.67984 33.2884 10.803 34.1679C12.9262 35.0474 15.2019 35.5 17.5 35.5C22.1413 35.5 26.5925 33.6563 29.8744 30.3744C33.1563 27.0925 35 22.6413 35 18C35 15.7019 34.5474 13.4262 33.6679 11.303C32.7884 9.17984 31.4994 7.25066 29.8744 5.62563C28.2493 4.00061 26.3202 2.71157 24.197 1.83211C22.0738 0.952651 19.7981 0.5 17.5 0.5ZM17.5 32C13.787 32 10.226 30.525 7.60051 27.8995C4.975 25.274 3.5 21.713 3.5 18C3.5 14.287 4.975 10.726 7.60051 8.10051C10.226 5.475 13.787 4 17.5 4C21.213 4 24.774 5.475 27.3995 8.10051C30.025 10.726 31.5 14.287 31.5 18C31.5 21.713 30.025 25.274 27.3995 27.8995C24.774 30.525 21.213 32 17.5 32Z"
                fill="currentColor"
              />
            </svg>
          )}
          <span className="px-1">{success ? 'Active' : 'Inactive'}</span>
        </span>
      </Button>
    </form>
  );
}
