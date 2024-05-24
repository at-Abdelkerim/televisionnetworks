'use client';

import React from 'react';
import { Box, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from 'recharts';
import { VictoryPie } from 'victory';
import SearchBar from '@/app/ui/admin/SearchBar';

export default function Page() {
  const data1 = [
    { name: 'name', value: 10 },
    { name: 'name2', value: 20 },
  ];
  return (
    <div className="">
      <SearchBar page="filter" />
      <hr className="my-10 w-full border-[#000]" />
      <Stack direction="row" spacing={4} className="mb-10 ">
        {[
          { title: 'system user', total: 37, change: 12 },
          { title: 'program', total: 37, change: -12 },
          { title: 'channel', total: 37, change: 12 },
        ].map(({ title, total, change }, index) => (
          <Paper
            key={index.toString()}
            elevation={2}
            sx={{
              width: '100%',
              backgroundColor: '#fff',
              p: 2,
            }}
          >
            <Stack direction="row" spacing={0}>
              <Stack spacing={0} className="w-full">
                <Typography className="mb-8 text-lg font-[600] capitalize">
                  {title}
                </Typography>
                <Typography className="mb-4 text-lg">{total}</Typography>
                <Typography className="text-sm ">
                  {change > 0 && '+'}
                  {change}% This Month
                </Typography>
              </Stack>
              <Box
                height={40}
                width={52}
                className="m-2 grid place-content-center rounded-md bg-[#181A41] text-white "
              >
                <svg viewBox="0 0 93 75" fill="none" className="h-8 w-8 ">
                  <path
                    d="M17.8571 17.8571C17.8571 16.4501 18.1343 15.0569 18.6727 13.757C19.2112 12.457 20.0004 11.2759 20.9953 10.281C21.9902 9.28608 23.1713 8.49688 24.4712 7.95843C25.7712 7.41999 27.1644 7.14286 28.5714 7.14286C29.9784 7.14286 31.3717 7.41999 32.6716 7.95843C33.9715 8.49688 35.1527 9.28608 36.1476 10.281C37.1425 11.2759 37.9317 12.457 38.4701 13.757C39.0086 15.0569 39.2857 16.4501 39.2857 17.8571C39.2857 20.6987 38.1569 23.424 36.1476 25.4333C34.1383 27.4426 31.413 28.5714 28.5714 28.5714C25.7298 28.5714 23.0046 27.4426 20.9953 25.4333C18.986 23.424 17.8571 20.6987 17.8571 17.8571ZM28.5714 0C23.8354 0 19.2934 1.88137 15.9445 5.23024C12.5957 8.5791 10.7143 13.1211 10.7143 17.8571C10.7143 22.5932 12.5957 27.1352 15.9445 30.484C19.2934 33.8329 23.8354 35.7143 28.5714 35.7143C33.3074 35.7143 37.8495 33.8329 41.1983 30.484C44.5472 27.1352 46.4286 22.5932 46.4286 17.8571C46.4286 13.1211 44.5472 8.5791 41.1983 5.23024C37.8495 1.88137 33.3074 0 28.5714 0ZM64.2857 21.4286C64.2857 19.5342 65.0383 17.7174 66.3778 16.3778C67.7174 15.0383 69.5342 14.2857 71.4286 14.2857C73.323 14.2857 75.1398 15.0383 76.4793 16.3778C77.8189 17.7174 78.5714 19.5342 78.5714 21.4286C78.5714 23.323 77.8189 25.1398 76.4793 26.4793C75.1398 27.8189 73.323 28.5714 71.4286 28.5714C69.5342 28.5714 67.7174 27.8189 66.3778 26.4793C65.0383 25.1398 64.2857 23.323 64.2857 21.4286ZM71.4286 7.14286C67.6398 7.14286 64.0061 8.64795 61.327 11.327C58.648 14.0061 57.1429 17.6398 57.1429 21.4286C57.1429 25.2174 58.648 28.851 61.327 31.5301C64.0061 34.2092 67.6398 35.7143 71.4286 35.7143C75.2174 35.7143 78.851 34.2092 81.5301 31.5301C84.2092 28.851 85.7143 25.2174 85.7143 21.4286C85.7143 17.6398 84.2092 14.0061 81.5301 11.327C78.851 8.64795 75.2174 7.14286 71.4286 7.14286ZM0 53.5714C0 50.7298 1.12882 48.0046 3.13814 45.9953C5.14746 43.986 7.87268 42.8571 10.7143 42.8571H46.4286C49.2702 42.8571 51.9954 43.986 54.0047 45.9953C56.014 48.0046 57.1429 50.7298 57.1429 53.5714V54.3714C57.1415 54.6989 57.1176 55.0258 57.0714 55.35C56.6653 58.813 55.3765 62.1137 53.3286 64.9357C49.4214 70.3286 41.9929 75 28.5714 75C15.15 75 7.72857 70.3286 3.80714 64.9357C1.76173 62.113 0.47542 58.8124 0.0714285 55.35C0.036421 55.0247 0.0125974 54.6983 0 54.3714V53.5714ZM7.14286 54.2143V54.2643L7.17143 54.6143C7.44714 56.8257 8.27765 58.9315 9.58571 60.7357C11.9143 63.9357 16.9857 67.8571 28.5714 67.8571C40.1571 67.8571 45.2286 63.9357 47.5571 60.7357C48.8652 58.9315 49.6957 56.8257 49.9714 54.6143L50 54.2571V53.5714C50 52.6242 49.6237 51.7158 48.954 51.046C48.2842 50.3763 47.3758 50 46.4286 50H10.7143C9.76708 50 8.85868 50.3763 8.1889 51.046C7.51913 51.7158 7.14286 52.6242 7.14286 53.5714V54.2143ZM71.4286 67.8571C67.2286 67.8571 63.7857 67.2143 61 66.1571C62.1345 64.0546 63.0008 61.8181 63.5786 59.5C65.4929 60.2214 68.0357 60.7143 71.4286 60.7143C79.4214 60.7143 82.7 57.9857 84.1429 55.9571C84.9928 54.7775 85.5286 53.401 85.7 51.9571L85.7143 51.7571C85.7068 51.2885 85.5154 50.8416 85.1813 50.5129C84.8472 50.1841 84.3973 49.9999 83.9286 50H63.9286C63.399 47.4105 62.3011 44.9709 60.7143 42.8571H83.9286C88.8571 42.8571 92.8571 46.8571 92.8571 51.7857V51.9071C92.8523 52.1675 92.8332 52.4274 92.8 52.6857C92.5051 55.3647 91.5261 57.9229 89.9571 60.1143C86.9429 64.3357 81.2929 67.8571 71.4286 67.8571Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>
      <Paper
        elevation={3}
        sx={{
          height: 400,
          width: '75%',
          backgroundColor: '#fff',
          my: 10,
          position: 'relative',
        }}
      >
        <Box className="absolute -top-5 left-0 w-80 rounded-md bg-black p-2 text-xl capitalize text-white">
          program on Category
        </Box>
        <Box className="h-full w-full ">
          <VictoryPie
            padAngle={2}
            innerRadius={100}
            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            data={[
              { x: 'Cats', y: 35 },
              { x: 'Dogs', y: 40 },
              { x: 'Birds', y: 55 },
            ]}
          />
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          height: 500,
          width: '100%',
          backgroundColor: '#fff',
          my: 10,
          position: 'relative',
        }}
      >
        <Box className="absolute -top-5 left-0 w-80 rounded-md bg-black p-2 text-xl capitalize text-white">
          program on Type
        </Box>
        <Box className="absolute right-4 top-4 w-80 rounded-md bg-black p-2 text-xl capitalize text-white">
          201 over all program
        </Box>
        <Box className="grid h-full w-full place-content-center ">
          <LineChart
            width={800}
            height={300}
            data={[
              { day: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
              { day: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
              { day: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
              { day: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
              { day: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
              { day: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
              { day: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
            ]}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20 }}
            />
            <YAxis axisLine={false} tickLine={false} padding={{ bottom: 0 }} />
            <CartesianGrid
              x={60}
              y={300}
              vertical={false}
              strokeDasharray="3 3"
            />
            <Tooltip />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
              wrapperStyle={{ padding: 30 }}
            />
            <Line type="linear" dataKey="pv" stroke="#8884d8" />
            <Line type="linear" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Box>
      </Paper>
    </div>
  );
}
