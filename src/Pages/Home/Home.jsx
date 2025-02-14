import React from 'react'
import Feature from '../../Components/Feature'
import Chart from '../../Components/Chart'
import LeftWidget from '../../Components/LeftWidget'
import RightWidget from '../../Components/RightWidget'
import { xAxisData } from '../../Datas/Datas'

export default function Home() {
  return (
    <div>

    <Feature/>
    <Chart grid title="Month Sale" data={xAxisData} dataKey="sale"/>
    <div className='flex gap-4 mb-6'>
      <LeftWidget/>
      <RightWidget/>

    </div>
    

    </div>
  )
}
