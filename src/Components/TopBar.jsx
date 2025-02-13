import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function TopBar() {
  return (
    <div className='topBar_container'>
        <div className='wrapper p-2'>

            <div className="left_content flex items-center">
                <div className='img_container w-20 '>

                    <img className='w-full h-full' src="/images/mountain-2.png" alt="mountain" />

                </div>
                <h2 className="font-bold text-lg">Sahand</h2>
            </div>
            <div className="right_content">

            <Icon className='text-blue-800' icon="solar:bell-bold-duotone" width="24" height="24"   />

            </div>

        </div>


    </div>
  )
}
