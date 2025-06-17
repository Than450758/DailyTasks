import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Delivery() {
  return (
    <div className='lg:container mx-auto  shadow-md p-7 rounded-2xl bg-white'>
        <div className='grid grid-cols-4'>
            <div className='delivery-wrapper'>
                <div className='flex items-center gap-4'>
                    <p><FontAwesomeIcon className='text-4xl' icon={faPercent}/></p>
                    <div>
                        <h4 className='text-base text-[#272343] capitalize font-medium mb-2.5'>Discount</h4>
                        <p className='text-sm text-[#9a9caa] font-normal'>Every week new sale</p>
                    </div>
                </div>
            </div>
            <div className='delivery-wrapper'>
                <div className='flex items-center gap-4'>
                    <p><FontAwesomeIcon className='text-4xl' icon={faPercent}/></p>
                    <div>
                        <h4 className='text-base text-[#272343] capitalize font-medium mb-2.5'>Discount</h4>
                        <p className='text-sm text-[#9a9caa] font-normal'>Every week new sale</p>
                    </div>
                </div>
            </div>
            <div className='delivery-wrapper'>
                <div className='flex items-center gap-4'>
                    <p><FontAwesomeIcon className='text-4xl' icon={faPercent}/></p>
                    <div>
                        <h4 className='text-base text-[#272343] capitalize font-medium mb-2.5'>Discount</h4>
                        <p className='text-sm text-[#9a9caa] font-normal'>Every week new sale</p>
                    </div>
                </div>
            </div>
            <div className='delivery-wrapper'>
                <div className='flex items-center gap-4'>
                    <p><FontAwesomeIcon className='text-4xl' icon={faPercent}/></p>
                    <div>
                        <h4 className='text-base text-[#272343] capitalize font-medium mb-2.5'>Discount</h4>
                        <p className='text-sm text-[#9a9caa] font-normal'>Every week new sale</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
