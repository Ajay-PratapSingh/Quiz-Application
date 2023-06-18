import React, { useRef, useEffect } from 'react';
import "./ProfileDashboard.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Attempt 1',
        score: 50,
    },
    {
        name: 'Attempt 1',
        score: 80,
    },
    {
        name: 'Attempt 1',
        score: 50,
    },
    {
        name: 'Attempt 1',
        score: 50,
    },
    {
      name: 'Attempt 1',
      score: 50,
    },
    {
      name: 'Attempt 2',
      score: 70,
    },
    {
      name: 'Attempt 3',
      score: 90,
    },
];

export default function Activity() {

    return (
        <div className='activity-wrapper'>
            <strong>My Activity</strong>
            <div className='activity'>
                <LineChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
    )
}
