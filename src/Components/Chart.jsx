import React from 'react'
import {ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,Tooltip
} from "recharts"

export default function Chart({title, data, dataKey,grid}) {
  return (
    <div className='chart m-4 p-5 shadow-lg'>
        <h3 className='font-bold text-blue-700'>
            {title}
        </h3>

        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart data={data}>

                <XAxis dataKey="name"  stroke='#5550bd'/>
                <Line type={'monotone'} dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip />
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray={10}/>}
            </LineChart>

        </ResponsiveContainer>

    </div>
  )
}
