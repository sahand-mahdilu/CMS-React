import React, { use, useEffect, useState } from 'react'
import Chart from '../../Components/Chart'
import { mainProductData } from '../../Datas/Datas'
import { useParams } from 'react-router'
import { productsData } from '../../Datas/Products'



export default function MainProduct() {

    const[products,setProducts]=useState()
    let param = useParams()
    console.log(param);
    
    
    
     
    useEffect(() => {
        let mainProduct = productsData.find(item => {
            return item.id === Number(param.id)
        })

        setProducts(mainProduct)
    }, [param.id])

        console.log(products);
  

    

    


  return (
    <div className='p-3 w-full '>
        <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl'>Product</h2>
        <button className='bg-teal-400 px-2 text-white rounded-lg'>Create</button>

        </div>

        <div className='flex items-center mt-3'>

            <div className='chart w-1/2 '>
                <Chart title="sale in mounth" data={mainProductData} dataKey={"sale"}/>
            </div>

            
               
                    <div  className='w-1/2 shadow-xl p-2 product_container'>

                    {products && (

                        <>
                        <div className='  flex items-center'>
                            <div className='size-16'>
                                <img className='w-full h-full' src={`./.${products.image}`} alt="sm" />
                            </div>
                            <span className='font-semibold'>{products.name}</span>
                        </div>
                        <div className='mt-3 flex flex-col'>
                        <span><span className='font-bold'>ID: </span>{products.id}</span>
                        <span><span className='font-bold'>Name: </span>{products.name}</span>
                        <span><span className='font-bold'>Price:</span> {products.price}</span>
                        <span><span className='font-bold'>Price:</span> {products.stock}</span>
                        <span> <span className='font-bold'>Active:</span> {products.active}</span>

                        </div>

                        </>
                    )}
    
    
                </div>
               
            

          
            
        </div>

        {products &&(

<div className='shadow-xl bottom_section p-3  flex justify-between mt-5 mx-4 '>

<div>
    <div className='right_content'>
        <h2 className='font-semibold'>Product Name</h2>
        <h3 className='text-gray-400'>{products.name}</h3>
        <hr />
        <div className='flex gap-2 mt-2'>
        <label htmlFor="stock">In-stock</label>
        <select className='border border-black px-1 ' name="stock" id="stock">

            <option value="yes">yes</option>
            <option value="no">no</option>
        </select>
        </div>

        <div className='flex gap-5 mt-5'>
        <label htmlFor="stock">Active</label>
        <select className='border border-black px-1' name="stock" id="stock">

            <option value="yes">yes</option>
            <option value="no">no</option>
        </select>
        </div>

    </div>
</div>

<div className='right_content flex flex-col justify-center gap-3'>

    <div className='size-28'>
        <img className='w-full h-full' src={`./.${products.image}`} alt="" />
    </div>
   
            
            <input type="file"  />
</div>


</div>
        )}

       


    </div>
  )
}
