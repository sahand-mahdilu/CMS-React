import React from 'react'
import { NewMembers } from '../Datas/NewMembers'
import { Icon } from '@iconify/react/dist/iconify.js';

export default function LeftWidget() {

    let members = NewMembers
  return (
    <div className='w-[100%] shadow-xl mt-5 ml-4 p-2'>
        <div>
            <h2 className='font-bold pb-2'>New members</h2>

            {
                members.map(member=>{

                    return(
                        <div key={member.id} className='flex justify-between mt-2'>
                <div className='img-contaner size-12 rounded-full overflow-hidden'>
                    <img className='w-full h-full' src="./images/profile.png" alt="" />
                </div>
                <div className='flex flex-col  items-center'>
                    <span className='font-semibold'>{member.name}</span>
                    <span className='text-gray-400' >{member.title}</span>
                </div>
                <div>
                    <button ><Icon icon="solar:eye-bold" width="24" height="24"   /></button>
                </div>
            </div>

                    )
                })

                
            }



            
        </div>

    </div>
  )
}


