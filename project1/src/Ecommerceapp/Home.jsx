import React from 'react'
import Banner from './Banner'
import Delivery from './Delivery'
import Brand from './Brand'
import Feature from './Feature'
import Categories from './Categories'
import Product from './Product'
import Client from './Client'
export default function Home() {
  return (

    <div>
            <div className='w-full min-h-[500px] bg-white flex  items-center justify-center rounded-b-3xl'>
            <Banner/>
            </div>
            <div className='w-full min-h-[#150px] bg-white'>
              <Delivery/>
            </div>

            <div className='brand flex items-center justify-center w-full '>
              <Brand/>
            </div>


             <div className='w-full flex items-center justify-center mb-[80px]'>
              <Feature/>
            </div>

            <div className='w-full flex items-center justify-center mb-[80px]'>
              <Categories/>
            </div>

            
            <div className='w-full flex items-center justify-center pb-[80px] '>
              <Product/>
            </div>


            <div className='w-full flex items-center justify-center bg-[#f0f2f3] min-h[589px] '>
              <Client/>
            </div>
    </div>

  )
}
