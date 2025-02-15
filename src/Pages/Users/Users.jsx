import React, { useState } from "react";
import { UsersData } from "../../Datas/Users";
import { NavLink } from "react-router";

export default function Users() {

  const [users,setUsers]=useState(UsersData)



  const deleteHandler= (userId)=>{

    setUsers(users.filter(user=>{

      return user.id !==userId
    }))

     

    

  }


  return (
    <div className="w-full p-3 flex justify-center">
      <table className="">
        <thead className="bg-blue-50">
          <tr className="">
            <th className="p-2 px-16">Id</th>
            <th className="p-2 px-16">User</th>
            <th className="p-2 px-16">Email</th>
            <th className="p-2 px-16">Status</th>
            <th className="p-2 px-16">Transaction</th>
            <th className="p-2 px-16">Action</th>
          </tr>
        </thead>
        <tbody>

    {users.map(user=>{
      return(

        <tr key={user.id} className=" ">
        <td className="p-2 px-16">{user.id}</td>

        <td className="p-2 px-16">
          <div className="flex items-center gap-2">
            <div className="img-contaner size-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src="./images/profile.png"
                alt=""
              />
            </div>
            <span>{user.name}</span>
          </div>
        </td>
        <td className="p-2 px-16">{user.email}</td>
        <td className="p-2 px-16">{user.status}</td>
        <td className="p-2 px-16">{user.transaction}</td>
        <td className="p-2 px-16">
          <div className="flex gap-2">
          
            <button className="bg-blue-400 px-2 rounded-md">edit</button>
       
            <button onClick={()=>deleteHandler(user.id)} className="bg-red-400 px-2 rounded-md">delete</button>

          </div>
        </td>
      </tr>
      )


    })}


         
        </tbody>
      </table>
    </div>
  );
}
