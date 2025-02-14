import React from 'react'

export default function LeftWidget() {
  return (
    <div>
        <div>
            <h2 className='font-bold'>New members</h2>
            <div>
                <div className='img-contaner size-12 rounded-full overflow-hidden'>
                    <img className='w-full h-full' src="./images/profile.png" alt="" />
                </div>
                <div className='flex flex-col  items-center'>
                    <span className='font-semibold'>ali reza</span>
                    <span className='text-gray-400' >web developer</span>
                </div>
                <div>
                    <button className='bg-green-300 px-2 rounded-lg'>approved</button>
                </div>
            </div>
        </div>

    </div>
  )
}
