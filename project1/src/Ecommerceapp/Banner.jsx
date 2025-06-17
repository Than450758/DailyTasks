import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'

export default function Banner() {

        const products=  [
        {
            id:1,
            title:'Best Furnites collkei dfi doj jkdo ',
            subTitle:'Welcone to chair',
            image:'/src/4.jpg'
        },
        {
            id:2,
            title:'Best Furnites collkei dfi doj jkdo ',
            subTitle:'Welcone to chair',
            image:'/src/2.jpg'
        },{
            id:3,
            title:'Best Furnites collkei dfi doj jkdo ',
            subTitle:'Welcone to chair',
            image:'/src/7.jpg'
        },
         {
            id:4,
            title:'Best Furnites collkei dfi doj jkdo ',
            subTitle:'Welcone to chair',
            image:'/src/2.jpg'
        }
    ];


    const settings={
            dots : true,
            infinite : true,
            speed :1000,
            slidesToShow:1,
            skidesToScroll :1
        };


  return(
    
    <div className='lg:container'>

        
            <div className='slider-container w-full h-full'>
                
                 <Slider {...settings}>
                {products?.map((product) =>(
                    <div key={product?.id} className="banner-slide-item" >
                     <div className="banner-text">
                        <p className='text-sm text-[#272343] uppercase font-normal'>{product?.subTitle}</p> 
                                    <h3 className='text-6xl text-[#272343] capitalize leading-16 max-w-[631px] w-full font-bold mb-5'>{product?.title}</h3>
                            
                            
                            
                                    <button className=' slick-prev max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fae] rounded-lg capitalize text-white cursor-pointer '>shop now<FontAwesomeIcon icon={faArrowRight}/></button>
                            </div>
                     <div className="banner-image w-full h-full flex items-center justify-end">
                        <img src={product?.image} alt={product?.title}/>
                     </div>
                            
                    </div>
                                ))
                }
            </Slider>
            


            </div>

    </div>
  )
}
