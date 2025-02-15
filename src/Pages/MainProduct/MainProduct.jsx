import React from 'react'
import Chart from '../../Components/Chart'
import { mainProductData } from '../../Datas/Datas'

export default function MainProduct() {
  return (
    <div className='p-3'>
        <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl'>Product</h2>
        <button className='bg-teal-400 px-2 text-white rounded-lg'>Create</button>

        </div>

        <div>

            <div className='chart '>
                <Chart title="sale in mounth" data={mainProductData} dataKey={"sale"}/>
            </div>
            
        </div>


    </div>
  )
}
