import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function Feature() {
  return (
    <div className='flex justify-evenly w-full'>

    <div className='p-7  shadow-lg'>
        <h2 className='text-2xl'>Revanue</h2>
        <div className='flex gap-4 pt-3'>
            <h2 className='text-4xl font-bold'>$2,415</h2>
            <div className='flex items-center '>
                <span>-24.1 </span>
                <Icon className='text-red-500' icon="material-symbols:arrow-downward-alt-rounded" width="24" height="24"   />
            </div>
        </div>
        <h2 className='pt-3 text-md text-gray-400'>Compared to last mounth</h2>
    </div>




    <div className='p-7  shadow-lg'>
        <h2 className='text-2xl'>Sales</h2>
        <div className='flex gap-4 pt-3'>
            <h2 className='text-4xl font-bold'>$5,350</h2>
            <div className='flex items-center '>
                <span>-24.1 </span>
                <Icon className='text-red-500' icon="material-symbols:arrow-downward-alt-rounded" width="24" height="24"   />
            </div>
        </div>
        <h2 className='pt-3 text-md text-gray-400'>Compared to last mounth</h2>
    </div>




    <div className='p-7  shadow-lg'>
        <h2 className='text-2xl'>Cost</h2>
        <div className='flex gap-4 pt-3'>
            <h2 className='text-4xl font-bold'>$2,105</h2>
            <div className='flex items-center '>
                <span>-24.1 </span>
                <Icon className='text-green-500' icon="material-symbols:arrow-upward-alt-rounded" width="24" height="24"   />
            </div>
        </div>
        <h2 className='pt-3 text-md text-gray-400'>Compared to last mounth</h2>
    </div>

    </div>
  )
}
