import React, { use, useState } from 'react'
import Chart from '../../Components/Chart'
import { mainProductData } from '../../Datas/Datas'
import { useParams } from 'react-router'
import { productsData } from '../../Datas/Products'



export default function MainProduct() {

    const[products,setProducts]=useState(productsData)
    console.log(products);

let param = useParams()
console.log(param);

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

            <div className='p-2 product_container'>

                


            </div>
            
        </div>


    </div>
  )
}
