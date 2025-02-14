import React from 'react'
import { Transactions } from '../Datas/Transactions'
import { data } from 'autoprefixer';

export default function RightWidget() {

    let datas= Transactions
    console.log(data);
  return (
    <div className='w-full p-10 shadow-xl mr-4 bg-slate-50'>
        <h2 className='font-semibold pb-3'>Lastest Trasaction</h2>
        <table className='w-full'>
            <thead>
            <tr className='flex justify-between'>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            </thead>

            <tbody>


                {datas.map(data=>{

                    return(

                        <tr key={data.id} className='flex justify-between m-2 items-center'>
                        <td>
        
                            <div className='flex items-center gap-2'>
                            <div className='img-contaner size-12 rounded-full overflow-hidden'>
                            <img className='w-full h-full' src="./images/profile.png" alt="" />
                        </div>
                        <span>{data.name}</span>
        
                            </div>
                       
                          
                        </td>
                        <td>{data.date}</td>
                        <td>{data.transaction}</td>
                        <td ><button className= {`px-2 rounded-lg ${data.status==="Approved"? "bg-green-300": data.status==="Pending"?"bg-blue-400": "bg-red-400" }`}>{data.status}</button></td>
                    </tr>
                    )
                })}




          

            </tbody>
            


            
        </table>

    </div>
  )
}
