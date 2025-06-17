import React from 'react'
import SectionTitle from './SectionTitle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Feature() {

  const features=[
    
    
    
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
     {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
    },
    
  ];
  const settings={
    className:'center',
    centerMide:true,
    infinite: true,
    centerPadding:"60px",
    slidesToShow:3,
    speed:500
  };
  return (
    <div className='lg:container mx-auto'>
      <SectionTitle title='Feature product' mb='mb-11'></SectionTitle>

        <div className='slider-container features-slider w-full h-full'>
          <Slider {...settings}>
            {
            features?.map((feature,index) =>(
                <div key={index} className='p-4'>
                  <div className='feature-image mb-4 relative'>
                      <img src={feature?.image} alt={feature?.title}/>
                      {
                        feature?.status &&(
                          <div className='absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg'>
                          
                            <button>{feature?.status}</button>
                          </div>
                        )
                      
                      }
                          
                  </div>
                  <div className='feature-content'>
                    <div className='flex items-center justify-between'>
                      <h4 className='mb-4'>{feature?.title}</h4>
                      <span className='bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center'>
                        <FontAwesomeIcon icon={faShoppingCart} size='1.5rem' color='#fff'/>
                      </span>
                    </div>
                    <p>
                      {feature?.price}
                      {
                        feature?.currentPrice &&(
                          <span>{feature?.currentPrice}</span>
                        )}
                      
                    </p>
                  </div>
                </div>
    
              
            ))
          }
          </Slider>
        </div>

    </div>
  )
}
