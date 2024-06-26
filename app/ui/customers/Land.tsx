import { Box, LinearProgress, Typography } from '@mui/material';
import Image from 'next/image';
import bg from '@/app/assets/img/bg.jpeg';

export default function Land() {
  return (
    <div className="relative  md:[grid-area:land]">
      <Image src={bg} alt="" className="h-full w-full" />
      <div className="radial absolute inset-0 grid max-md:content-end max-md:px-2 md:auto-rows-min ">
        <svg className="h-10 w-10 md:h-24 md:w-24">
          <path
            fill="CurrentColor"
            d="M34.672 34.708c-.001.434-.135.872-.523 1.2s-1.057.6-2.167.6h-2.234v-3.582h2.134c.996 0 1.702.202 2.145.517a1.46 1.46 0 0 1 .645 1.255m-1.8-4.3c.416-.3.617-.724.62-1.36-.001-.437-.127-.8-.44-1.1s-.85-.478-1.713-.478h-1.58v3.395h1.084c.94 0 1.6-.167 2.03-.47m4.2 4.585c.006-1.656-1.097-2.915-2.862-3.398.477-.243.853-.54 1.13-.904.368-.487.545-1.083.543-1.778a3.17 3.17 0 0 0-1.055-2.376c-.722-.65-1.817-1.073-3.312-1.072H27.4V38.57h4.845c1.728 0 2.942-.47 3.723-1.163s1.117-1.6 1.117-2.435m4.602 6.143h-19.37V22.887h19.368zm-31.14-10.697c.415-.3.617-.724.62-1.36-.001-.437-.127-.8-.44-1.1s-.85-.478-1.714-.478H7.43v3.395h1.084c.938 0 1.6-.167 2.03-.47m1.156 3.048c-.442-.315-1.15-.517-2.144-.517H7.432v3.582h2.234c1.1 0 1.778-.26 2.166-.6s.522-.777.523-1.2c-.004-.52-.203-.937-.645-1.255m3.056 1.517c.006-1.656-1.098-2.915-2.86-3.398.475-.243.852-.54 1.127-.904.37-.487.545-1.083.544-1.778.001-.853-.335-1.724-1.056-2.376s-1.816-1.073-3.3-1.072H5.08V38.57h4.846c1.73 0 2.942-.47 3.723-1.163s1.12-1.6 1.117-2.435m4.602 6.143H0V22.887h19.368zm40.786-6.06l-.3.2c-1.5.916-3.13 1.407-4.613 1.406-3.172-.012-5.26-1.892-5.27-4.626.004-2.676 2.185-4.657 5.188-4.663 1.53.001 2.915.396 4.562 1.3l.303.166v-2.443l-.13-.05c-1.857-.733-3.295-1.06-4.714-1.058-2.196-.001-4.1.724-5.46 1.954s-2.163 2.968-2.162 4.964c.001 1.4.574 3.02 1.802 4.312s3.1 2.236 5.7 2.235h.01c2.146 0 3.634-.478 4.98-1.14l.114-.056zM64 41.114H44.633V22.887H64z"
          />
        </svg>
        <Typography className="">Now playing</Typography>
        <Typography className=" font-extrabold md:text-2xl">
          {"Gray's Anatomy"}
        </Typography>
        <Typography className="max-w-[400px] text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          dolorum minus sed, quod quis qui culpa nemo fugiat aliquid, minima
          officiis quam doloribus provident.
        </Typography>
        <Box className="grid max-w-[400px] grid-cols-[1fr_auto] py-2 md:py-10">
          <Box className="grid grid-rows-2">
            <LinearProgress
              variant="determinate"
              value={70}
              className="h-2 rounded-full bg-white/50"
              sx={{
                '& > span': {
                  borderRadius: 10,
                  backgroundColor: 'rgb(255 255 255 )',
                },
              }}
            />
            <Box className="flex justify-between">
              <Typography className="">32:23</Typography>
              <Typography className="">01:32:23</Typography>
            </Box>
          </Box>
          <Box className="grid w-20 justify-center">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-110 w-10"
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
          </Box>
        </Box>
      </div>
    </div>
  );
}
