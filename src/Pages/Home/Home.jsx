import React from 'react'
import Feature from '../../Components/Feature'
import Chart from '../../Components/Chart'
import { xAxisData } from '../../Datas/Datas'

export default function Home() {
  return (
    <div>

    <Feature/>
    <Chart grid title="Month Sale" data={xAxisData} dataKey="sale"/>
    <div className='flex'>

    </div>
    

    </div>
  )
}
