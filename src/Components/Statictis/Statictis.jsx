import React from 'react';

import  { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
 
const data = [
    {
      name: 'assignment-1',
      marks: 60,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'assignment-2',
      marks: 60,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'assignment-3',
      marks: 60,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'assignment-4',
      marks: 60,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'assignment-5',
      marks: 60,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'assignment-6',
      marks: 56,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'assignment-7',
      marks: 60,
      pv: 4300,
      amt: 2100,
    },
  ];

const Statictis = () => {
    return (
        <div className=' mt-14'>
            <h2 className='text-4xl font-bold text-center text-purple-400'>MY STATISTICS</h2>
            <AreaChart
          width={900}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    );
};

export default Statictis;