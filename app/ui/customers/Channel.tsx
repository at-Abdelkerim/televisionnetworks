'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';

export default function Channel() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="grid content-center  max-md:grid-flow-col max-md:overflow-x-scroll md:auto-rows-min md:grid-cols-1 md:gap-y-5 md:overflow-y-scroll md:px-10 md:[grid-area:channel]">
      {[
        {
          label: 'NBC TV',
          Icon: ({ className }: { className: string }) => (
            <svg className={className} viewBox="35 0 50 70">
              <path
                d="M37.954 11.822c-2.392 2.165-3.263 7.072 1.05 9.94l17.203 11.802-8.34-19.11c-1.748-4.51-6.53-5.493-9.91-2.633"
                fill="currentColor"
              />
              <path
                d="M52.762 2.53c-2.796.057-6.995 3.387-5.126 8.472l8.627 20.345 3.03-21.4c.702-5.317-3.322-7.772-6.532-7.418"
                fill="currentColor"
              />
              <path
                d="M60.64 9.132h1.63s.87 0 1 .41c-.642.524-2.39.6-2.157 3.4l2.742 18.412 8.568-20.4c1.753-4.555-1.926-8.358-5.19-8.475l-.463-.02c-2.93 0-6.285 2.128-6.12 6.68"
                fill="currentColor"
              />
              <path
                d="M72.07 14.628l-8.104 18.88 17.198-11.864c3.964-2.812 3.325-7.307 1.106-9.53-.93-1.046-2.638-1.854-4.448-1.854-2.138 0-4.425 1.134-5.752 4.368"
                fill="currentColor"
              />
              <path
                d="M79.237 24.33l-16.15 11.28h19.886c4.08 0 6.702-4.207 5.536-8.067-.78-2.426-3.1-4.33-5.77-4.334-1.128.001-2.325.34-3.5 1.12"
                fill="currentColor"
              />
              <path
                d="M37.5 35.61h19.593L40.928 24.33c-3.732-2.398-7.93-.995-9.444 2.984C30.2 31.87 33.407 35.61 37.5 35.61"
                fill="currentColor"
              />
              <path
                fill="currentColor"
                d="M58.7 49.926h3.408c.783.05 2.172.733 2.172 2.353 0 1.694-1.44 2.378-2.222 2.455H58.7v-4.808m-.052-7.542h2.805c.96.052 2.093.76 2.093 2.076 0 1.3-.857 2.15-1.966 2.303h-2.93v-4.38m-3.835-3.14V57.87h9.037c2.145 0 4.695-2.15 4.695-4.96 0-2.935-1.917-4.376-3.13-4.96 0 0 2.22-1.3 2.123-4.075-.1-3.745-3.56-4.632-4.747-4.632h-7.977M40.952 57.87V47.143L52.665 58.58V39.245H48.73v10.453l-11.716-11.2V57.87zm28.226-9.514c.1 5.9 4.33 10.293 9.77 10.293 1.3 0 2.65-.244 4.038-.78v-3.795a6.76 6.76 0 0 1-3.525.997c-3.292 0-6.4-2.436-6.27-6.867.222-3.594 3.164-6.076 6.336-6.076 1.16 0 2.356.335 3.46 1.065V39.5c-1.287-.522-2.567-.755-3.8-.755-5.427 0-9.905 4.577-10 9.6"
              />
            </svg>
          ),
        },
        {
          label: 'BBC',
          Icon: ({ className }: { className: string }) => (
            <svg viewBox="-5 5 75 50" className={className}>
              <path
                fill="CurrentColor"
                d="M34.672 34.708c-.001.434-.135.872-.523 1.2s-1.057.6-2.167.6h-2.234v-3.582h2.134c.996 0 1.702.202 2.145.517a1.46 1.46 0 0 1 .645 1.255m-1.8-4.3c.416-.3.617-.724.62-1.36-.001-.437-.127-.8-.44-1.1s-.85-.478-1.713-.478h-1.58v3.395h1.084c.94 0 1.6-.167 2.03-.47m4.2 4.585c.006-1.656-1.097-2.915-2.862-3.398.477-.243.853-.54 1.13-.904.368-.487.545-1.083.543-1.778a3.17 3.17 0 0 0-1.055-2.376c-.722-.65-1.817-1.073-3.312-1.072H27.4V38.57h4.845c1.728 0 2.942-.47 3.723-1.163s1.117-1.6 1.117-2.435m4.602 6.143h-19.37V22.887h19.368zm-31.14-10.697c.415-.3.617-.724.62-1.36-.001-.437-.127-.8-.44-1.1s-.85-.478-1.714-.478H7.43v3.395h1.084c.938 0 1.6-.167 2.03-.47m1.156 3.048c-.442-.315-1.15-.517-2.144-.517H7.432v3.582h2.234c1.1 0 1.778-.26 2.166-.6s.522-.777.523-1.2c-.004-.52-.203-.937-.645-1.255m3.056 1.517c.006-1.656-1.098-2.915-2.86-3.398.475-.243.852-.54 1.127-.904.37-.487.545-1.083.544-1.778.001-.853-.335-1.724-1.056-2.376s-1.816-1.073-3.3-1.072H5.08V38.57h4.846c1.73 0 2.942-.47 3.723-1.163s1.12-1.6 1.117-2.435m4.602 6.143H0V22.887h19.368zm40.786-6.06l-.3.2c-1.5.916-3.13 1.407-4.613 1.406-3.172-.012-5.26-1.892-5.27-4.626.004-2.676 2.185-4.657 5.188-4.663 1.53.001 2.915.396 4.562 1.3l.303.166v-2.443l-.13-.05c-1.857-.733-3.295-1.06-4.714-1.058-2.196-.001-4.1.724-5.46 1.954s-2.163 2.968-2.162 4.964c.001 1.4.574 3.02 1.802 4.312s3.1 2.236 5.7 2.235h.01c2.146 0 3.634-.478 4.98-1.14l.114-.056zM64 41.114H44.633V22.887H64z"
              />
            </svg>
          ),
        },
        {
          label: 'CNN',
          Icon: ({ className }: { className: string }) => (
            <svg className={className} viewBox="33 -5 1 75" fill="currentColor">
              <path d="M4.852 32c0 5.454 4.437 9.892 9.892 9.892h9.24c.58 0 1.03-.552 1.03-1.027V22.748a2.08 2.08 0 0 1 2.076-2.077c.734 0 1.42.4 1.786 1.017L40.482 41.7c.148.253.438.415.738.415.476 0 .863-.387.863-.863V22.748a2.08 2.08 0 0 1 2.076-2.077 2.07 2.07 0 0 1 1.785 1.017l11.6 20.012c.148.253.438.415.738.415.476 0 .863-.387.863-.863v-24h-3.642v14.28L48.7 19.82c-.963-1.647-2.8-2.687-4.734-2.687a5.52 5.52 0 0 0-5.515 5.516v8.894L31.628 19.82c-.963-1.647-2.8-2.687-4.734-2.687a5.52 5.52 0 0 0-5.515 5.516v14.615c.002.532-.398.995-.98.997h-5.616a6.25 6.25 0 0 1 0-12.5h4.705v-3.64h-4.744c-5.454 0-9.892 4.437-9.892 9.892m55.506-14.75v24a2.08 2.08 0 0 1-2.076 2.077c-.734 0-1.42-.4-1.786-1.016l-11.6-20c-.148-.253-.438-.416-.738-.416-.476 0-.863.387-.863.863v18.505a2.08 2.08 0 0 1-2.077 2.077 2.1 2.1 0 0 1-1.786-1.016L27.828 22.3c-.148-.253-.438-.416-.738-.416-.476 0-.863.387-.863.863v18.127c0 1.193-1.05 2.24-2.244 2.24h-9.24A11.12 11.12 0 0 1 3.638 32.009a11.12 11.12 0 0 1 11.106-11.106h4.743V17.26h-4.74A14.75 14.75 0 0 0 0 32.009a14.75 14.75 0 0 0 14.748 14.748h9.328c3.534.002 5.806-2.07 5.8-5.887v-8.412L36.7 44.18c.963 1.646 2.8 2.687 4.734 2.687 3.046 0 5.515-2.47 5.515-5.515v-8.894l6.8 11.722a5.53 5.53 0 0 0 4.734 2.687A5.52 5.52 0 0 0 64 41.352V17.26z" />
            </svg>
          ),
        },
        {
          label: 'Al Jazeera',
          Icon: ({ className }: { className: string }) => (
            <svg viewBox="40 100 100 200" className={className}>
              <g transform="matrix(.754552 0 0 .754552 100 139.153)">
                <path
                  fill="currentColor"
                  d="M-22.7,187.4c-6.5-2.1-12.6-8.2-16.9-16.7c-1-2-1.8-3.7-1.8-3.9c0-0.5,3-2.2,3.2-1.7c0.1,0.2,0.9,1.6,1.9,3.2
		c7.4,11.8,17.4,13.1,22.2,2.9c1.3-2.9,2-5.5,2.7-11.4c1.1-8.4,2.8-18.6,3.6-21.5c2.1-8,6.7-14.4,18.1-25.2
		c10-9.4,14.8-16.7,15.3-23.4c0.1-1.3,0.1-2.4,0-2.4c-0.1,0-1.2,0.9-2.4,1.9c-1.2,1-4,3.3-6.2,4.9c-5.7,4.2-8.1,6.4-9.8,8.7
		c-0.8,1.1-1.6,2-1.7,2c-0.1,0-0.9-1.9-1.6-4.1c-1.1-3.3-1.4-4.6-1.4-6.4c0-2.7,0.5-3.7,3.2-7.1c3.5-4.4,5.4-9.3,5.4-14.4
		c0-5.5-2.4-10.2-9.4-18.7C-1.5,50.3-10.6,40.6-11,40.6c-0.1,0-0.2,2.2-0.2,4.8c0.2,10.9-1.9,19.3-7.9,31.3
		c-3.8,7.7-4.6,9.5-6.1,14.1c-1.6,4.9-2.1,7.5-2.3,12.3l-0.2,4.3l-1.4,1.4c-0.8,0.8-1.5,1.3-1.6,1.2c-0.5-0.5-0.9-7-0.7-11.1
		c0.3-7.6,2.1-14.5,6.5-24.8c8.4-19.6,10.6-26.8,10.1-33.8c-0.2-2.9-0.4-3.8-3.3-11.5c-2.4-6.6-1.8-13,2-19c1-1.5,1.1-1.9,0.8-2.6
		c-0.2-0.5-0.9-2.2-1.7-3.8c-2.2-5-2.8-7.6-2.8-13.2c0-5.2,0.4-7.4,1.9-10.7c1.3-2.9,5-6.3,6.9-6.3c1.3,0,1.1,0.6-0.7,1.9
		c-3.8,2.9-5.2,7.9-3.9,14.2c1.4,6.6,4.1,11.2,13,22.4C18.8,38,29.4,53.4,37.7,69.9c5.3,10.5,7.4,16,9.6,24.7c2.3,9,3,16.5,2.3,24.1
		c-1.4,16.6-8.1,28.2-19.5,33.9c-7.8,4-18.1,4.6-27.4,1.8c-3.3-1-3.2-0.8-2.5-5.4c0.8-4.6,1.3-6.4,2-6.3c0.2,0,1.8,0.3,3.5,0.6
		c7.5,1.4,15.6-0.3,21.7-4.5c2-1.3,5.6-4.8,7.4-7.1c3-3.9,5.4-9,6.8-14.6c1-4.1,1.4-12.5,0.8-16.9c-0.5-3.3-2.2-9-4.1-13.7
		C31.7,70.1,19.9,52.4-5.4,20.7c-1.1-1.4-3.2-4.2-4.7-6.1c-1.4-1.9-2.7-3.5-2.8-3.5c-0.4,0-1.9,2.5-2.5,4.2
		c-0.4,1.2-0.5,2.4-0.4,4.2c0.3,4.9,2.3,7.9,12.6,18.6C3,44.6,6.6,48.9,9.7,53.6c5.8,8.8,7.9,17.7,5.9,25c-0.2,0.7-0.3,1.4-0.2,1.4
		c0.4,0.4,6.7-5.2,8.6-7.8c0.6-0.9,1.3-1.4,1.4-1.3c0.4,0.4,2.4,8.6,3.2,12.9c1.1,5.9,1.4,10.2,1.2,14.2c-0.2,4.3-0.8,6.4-3,10.7
		c-2.2,4.3-5.2,8-13.8,16.9C4.5,134.5,1.5,138.1,0.4,141c-1.1,2.9-2.4,10-3.1,17.2c-1.1,10.6-2.1,18-2.9,20.6
		c-1.2,4-3.2,6.7-6.2,8.1c-1.9,0.9-2.5,1.1-5.3,1.2C-19.7,188.2-20.6,188.1-22.7,187.4L-22.7,187.4z M9.9,173.9
		c-2.5-1.2-4.2-3.9-6.1-9.2c-0.7-1.8-0.8-2.6-0.5-2.9c0.6-0.6,1.2,0.2,2,2.3c1,2.6,2,4.4,3,4.9c0.7,0.4,1,0.4,1.8,0
		c0.8-0.4,1-0.7,1.1-1.7c0.2-2.3,1.4-1.1,2.5,2.3c0.7,2.4,0.7,2.8-0.4,3.9C11.9,174.8,11.6,174.8,9.9,173.9z M-16,165.2l-7.2-5.9
		l-6.9,8.4l7.2,5.9L-16,165.2z M-36.2,27.4c0,3.5,2.9,6.5,6.5,6.5c1.6,0,3.1-0.6,4.2-1.6l0.9-0.6l-0.1,2.3c-0.2,3-1.3,5.2-4,8.2
		c-3,3.2-5.9,5.3-15.4,11c-13,7.8-17.3,10.9-22,15.4c-6,5.8-10.2,12.8-12,20.2c-2.5,10-1.7,19.7,2.5,30.8c1.2,3.2,1.2,3.4,1.4,8.8
		c0.5,14.4,4.1,24.2,11.5,31.6c3.8,3.8,7.2,5.6,11.8,6.1c1.1,0.1,2.8,0.2,3.7,0.1c10.8-0.9,15.5-9.9,17.9-33.8
		c0.3-3.1,0.7-6.1,0.9-6.7c0.2-0.7,2.4-2.9,6.6-6.7c6.6-6,7.9-7.7,7.9-10.3c0-1.6-1.3-10.8-1.6-11.1c-0.1-0.1-0.9,0.7-1.7,1.8
		c-1.3,1.8-5.6,6-11.1,10.8c-3.6,3.2-4.3,4.9-5.6,13.6c-2.2,15.3-4.9,23.4-9.5,28c-4.2,4.2-11.1,5.3-16.5,2.6
		c-5.5-2.8-9.6-11.2-10.1-20.7l-0.2-3.7l2.5,2.3c3.3,3.1,6,4.5,8.9,4.5c2.7,0,3.6-0.3,5-1.5c2.1-1.8,3.1-4.8,3.1-9.2
		c0-8.8-4.7-19.3-9.9-22c-2.1-1.1-4.8-1-6.8,0.3c-1.9,1.2-3.8,3.8-4.8,6.7c-0.4,1.2-0.9,2.2-1.1,2.3c-0.6,0.3-1.2-3.7-1.2-8.3
		c0-3.4,0.2-5.4,0.7-7.8c1.9-9.2,5.5-15.7,12.7-22.8c4.8-4.8,9.8-8.6,21-16c8.7-5.7,12.4-8.8,14.4-12c0.9-1.4,1.1-1.6,1.2-1
		c0.3,2.2-2.3,8.9-8.3,21.3c-4.9,10.2-6.5,13.8-8.9,20.6c-3.1,8.6-5.1,16.3-6.2,24.6c-0.7,5.3-1,16.3-0.5,23.2
		c0.4,6.2,1.8,15.9,2.3,16.5c0.2,0.2,0.7,0,1.4-0.8l1.1-1.1l-0.6-3.6c-2.2-13.2-1.3-27.2,2.4-41.6c2.7-10.2,5.9-18.3,13.5-34.1
		c6.7-13.9,7.9-18.6,7.6-29.8c-0.3-9.3-1.5-14.7-4-17.5c-1.4-1.5-2.8-2.3-4.7-2.3C-33.7,20.8-36.2,23.8-36.2,27.4L-36.2,27.4z
		 M-14.4,150.5l-7.2-5.9l-6.9,8.4l7.2,5.9L-14.4,150.5z M-13.9,143.9c-4.1-4-8.2-9.7-11.2-15.8l-1.2-2.5l1.4-1.5
		c0.8-0.8,1.6-1.5,1.8-1.5s0.9,0.8,1.6,1.9c1.6,2.3,7,7.9,10,10.4c2,1.6,2.2,1.9,2,2.7c-0.1,0.5-0.6,2.5-1,4.5
		c-0.4,2-0.8,3.8-0.9,3.9C-11.5,146.1-12.7,145.1-13.9,143.9L-13.9,143.9z M29.9,126.7l-8.4-4.1l-4.7,9.7l8.4,4L29.9,126.7z
		 M-60.5,114.9c0.6,0,1.2,0.2,1.8,0.5c1.2,0.6,2.9,3.2,2.9,4.3c0,0.5-0.4,1.6-1,2.5c-0.7,1.3-1.3,1.9-2.7,2.5
		c-2.3,1.1-5,1.2-7.2,0.1c-2.5-1.2-2.6-1.4-1.5-3.7C-66.3,117.3-63.2,114.9-60.5,114.9z M2.5,109.1l-8.4-4l-4.7,9.7l8.4,4L2.5,109.1
		z M-57.8,93.2c-1.2-1.2-1.5-2.8-1.1-5.6c0.2-1.6,0.6-3,1.5-4.5c2.1-4.1,8.9-10,8.9-7.8c0,0.1-1.4,1.6-3,3.4
		c-4.5,4.7-6,8.1-4.4,10.1c1.1,1.4,3.2,1,3.2-0.6c0-0.9,1.1-2.3,1.6-1.9c0.5,0.3,0.5,1.4-0.1,3.3C-52.6,93.6-55.7,95.4-57.8,93.2
		L-57.8,93.2z M-12.9,88.7c-0.8-3-0.6-3.4,7.4-12c3.3-3.5,6.4-7,6.9-7.7c1-1.3,1-1.3,1.5,1c0.2,1,0.2,1.6-0.2,2.5
		c-0.3,0.6-3.2,4.1-6.5,7.7c-3.3,3.6-6.5,7.2-7.1,8.1c-0.6,0.9-1.2,1.6-1.4,1.6C-12.5,89.9-12.7,89.4-12.9,88.7z M-31.6,38.5
		c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5C-34.5,32-31.6,34.9-31.6,38.5z"
                />
              </g>
            </svg>
          ),
        },
        {
          label: 'TRT WORLD',
          Icon: ({ className }: { className: string }) => (
            <svg viewBox="-5 0 240 14" className={className}>
              <g fill="currentColor">
                <path d="m 119.714,0.893 c -1.214,0 -2.285,0.821 -2.643,1.964 l -5.25,17.607 -6.928,-19.571 h -2.929 A 2.04,2.04 0 0 0 100.036,2.25 L 93.57,20.607 88.106,2.357 C 87.857,1.5 87.036,0.893 86.18,0.893 h -4.11 l 8.822,28.178 h 2.536 A 2.743,2.743 0 0 0 96,27.286 l 6.679,-17.643 7.357,19.428 h 3.071 c 0.822,0 1.536,-0.535 1.786,-1.321 L 123.32,0.857 h -3.607 v 0.036 z m 67.179,0 h -3.679 c -0.964,0 -1.714,0.786 -1.714,1.714 v 26.464 h 15.679 c 1.535,0 2.75,-1.25 2.75,-2.75 V 24 H 186.857 V 0.893 Z m -14.679,19.178 c 3.786,-1.75 5.857,-5.107 5.857,-9.464 0,-4.678 -3.214,-9.714 -10.285,-9.714 h -11.857 c -0.965,0 -1.715,0.786 -1.715,1.714 v 26.464 h 2.607 c 1.536,0 2.75,-1.25 2.75,-2.75 v -5.607 h 6.143 l 6.929,8.357 h 6.428 l -7.392,-9 z m -4.178,-4.428 h -8.465 V 6 H 168 c 1.821,0 2.929,0.893 3.536,1.643 0.714,0.857 1.107,2.071 1.107,3.178 0.036,1.965 -1.607,4.822 -4.607,4.822 z M 212,0.893 h -8.143 c -0.964,0 -1.714,0.786 -1.714,1.714 V 29.071 H 212 c 10.679,0 15.464,-7.107 15.464,-14.142 C 227.464,7.964 222.68,0.893 212,0.893 Z M 212.607,24 H 207.5 V 5.964 h 5.107 c 2.964,0 5.429,1 7.143,2.929 1.464,1.607 2.286,3.821 2.286,6.071 0.035,4.357 -3.607,9.036 -9.429,9.036 z" />
                <circle cx="137.286" cy="15" r="7.7140002" id="circle164" />
                <circle cx="137.286" cy="15" r="7.7140002" id="circle166" />
                <circle cx="137.286" cy="15" r="7.7140002" id="circle168" />
                <path d="M 142.393,0.821 141.214,0.5 C 134.857,-1.214 128,5.75 127.43,13.893 a 9.934,9.934 0 0 1 2.785,-5.857 9.815,9.815 0 0 1 7.036,-2.929 c 2.821,0 5.321,1.179 7.143,3.036 a 9.844,9.844 0 0 1 2.75,6.857 c 0,0.357 -0.036,0.75 -0.072,1.107 -0.571,8.143 -7.428,15.107 -13.785,13.393 l -1.179,-0.321 c 1.572,0.535 3.322,0.821 5.143,0.821 8.571,0 15,-6.464 15,-15 0.036,-6.714 -3.964,-12.143 -9.857,-14.179 z" />
                <path d="m 137.286,24.893 c -3.643,0 -6.822,-1.929 -8.536,-4.893 a 9.887,9.887 0 0 1 -1.357,-5 c 0,-0.357 0.036,-0.75 0.071,-1.107 C 128.036,5.75 134.893,-1.214 141.25,0.5 l 1.179,0.321 C 140.857,0.286 139.107,0 137.286,0 c -8.572,0 -15,6.464 -15,15 0,6.75 4,12.179 9.857,14.179 l 1.178,0.321 c 6.358,1.714 13.215,-5.25 13.786,-13.393 a 9.874,9.874 0 0 1 -9.821,8.786 z" />
                <path d="m 41.643,0.179 h -12.5 a 1.982,1.982 0 0 0 -1.964,1.964 v 26.25 H 32 a 2.622,2.622 0 0 0 2.607,-2.607 v -4.357 h 6 l 4.857,6.928 h 8.072 l -5.822,-8.25 0.679,-0.428 c 2.714,-1.715 4.571,-5.286 4.571,-8.929 0,-7.25 -5.893,-10.571 -11.321,-10.571 z m 0.071,14.428 H 34.571 V 6.93 h 7.143 c 2.5,0 3.822,1.928 3.822,3.821 0,1.5 -1.036,3.857 -3.822,3.857 z" />
                <path d="m 9.036,28.393 h 4.821 a 2.622,2.622 0 0 0 2.607,-2.607 V 7.036 h 6.822 c 1.214,0 2.214,-1 2.214,-2.215 V 0.18 H 1.429 C 0.643,0.179 0,0.82 0,1.607 V 7 h 9.036 z" />
                <path d="m 62.929,28.393 h 4.821 a 2.622,2.622 0 0 0 2.607,-2.607 V 7 h 6.822 c 1.214,0 2.214,-1 2.214,-2.214 V 0.179 H 55.32 c -0.785,0 -1.428,0.642 -1.428,1.428 V 7 h 9.036 v 21.393 z" />
              </g>
            </svg>
          ),
        },
        {
          label: 'FOX',
          Icon: ({ className }: { className: string }) => (
            <svg className={className} viewBox="5 -8 50 80" fill="currentColor">
              <path d="M7.796 25.776v3.583h7.547v7.5H7.74v8.883H0V18.258h16.55l.5 7.517zm55.446-7.48H54.96l-3.442 5.92-3.378-5.92h-8.575l7.67 13.237L39.1 45.72l8.33-.004 3.973-6.948 4.02 6.935H64l-8.28-14.26zM16.85 32.034c0-7.355 5.865-13.348 13.117-13.348s13.1 5.993 13.1 13.36-5.886 13.357-13.1 13.357S16.85 39.42 16.85 32.034zm15.45 5.488v-10.98c-.026-1.284-1.05-2.324-2.333-2.372a2.34 2.34 0 0 0-2.218 2.372v10.95a2.25 2.25 0 0 0 2.218 2.269 2.3 2.3 0 0 0 2.333-2.239z" />
            </svg>
          ),
        },
      ].map(({ label, Icon }, index) => (
        <Box
          key={index.toString()}
          onClick={() => {
            setSelected(index);
          }}
          className="grid auto-cols-min auto-rows-min  md:grid-flow-col "
        >
          <Box
            sx={index == selected ? { border: '3px solid #aaaaaa80' } : {}}
            className="grid rounded-full p-1"
          >
            <Icon
              className={clsx(
                'rounded-full bg-white/10 ',
                index == selected
                  ? 'h-16 w-16 md:h-24 md:w-24'
                  : 'h-10 w-10 md:h-16 md:w-16',
              )}
            />
          </Box>
          <Typography className="hidden place-content-center whitespace-nowrap px-4 md:grid">
            {label}
          </Typography>
        </Box>
      ))}
    </div>
  );
}
