import React, { useState } from 'react'
import { productsData } from '../../Datas/Products'
import { NavLink } from 'react-router'

export default function Products() {

  const [items,setItems]=useState((productsData))


  const deleteHandler= (productId)=>{

    setItems(items.filter(item=>{

      return item.id !==productId
    }))

     

    

  }
  

  
  return (
    <div className="w-full p-3 flex justify-center">
    <table className="">
      <thead className="bg-blue-50">
        <tr className="">
          <th className="p-2 px-16">Id</th>
          <th className="p-2 px-16">Name</th>
          <th className="p-2 px-16">Price</th>
          <th className="p-2 px-16">Action</th>
        </tr>
      </thead>
      <tbody>

  {items.map(item=>{
    return(

      <tr key={item.id} className=" ">
      <td className="p-2 px-16">{item.id}</td>

      <td className="p-2 px-16">
        <div className="flex items-center gap-2">
          <div className="img-contaner size-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src={item.image}
              alt=""
            />
          </div>
          <span>{item.name}</span>
        </div>
      </td>
      <td>price</td>
      
    
      <td className="p-2 px-16">
        <div className="flex gap-2">
        <NavLink to={`/mainUser/${item.id}`}>
          <button className="bg-blue-400 px-2 rounded-md">edit</button>
      </NavLink>
          <button onClick={()=>deleteHandler(item.id)} className="bg-red-400 px-2 rounded-md">delete</button>

        </div>
      </td>
    </tr>
    )


  })}


       
      </tbody>
    </table>
  </div>
  )
}
