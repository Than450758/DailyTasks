import React from 'react'

export default function Brand() {

    const brands=[
        {

            id:1,
            image:'/src/s2.jpg'
        },
        {

            id:2,
            image:'/src/s2.jpg'
        },
        {

            id:3,
            image:'/src/s2.jpg'
        },
        {

            id:4,
            image:'/src/s2.jpg'
        },
        {

            id:5,
            image:'/src/s2.jpg'
        },
        {

            id:6,
            image:'/src/s2.jpg'
        },
        {

            id:7,
            image:'/src/s2.jpg'
        }
    ]
  return (
    <div className='lg:container mx-auto'>

        <div className='grid grid-cols-7  items-center justify-center gap-5'>
                {
                    brands?.map((brand)=>(
                        <div key={brand?.id} className='brand-item'>
                            <img className='w-auto h-auto' src={brand?.image} alt='brand'/>
                        </div>      
                    ))
                }
        </div>
    </div>
  )
}
