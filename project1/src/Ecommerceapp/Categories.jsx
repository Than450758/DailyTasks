import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SectionTitle from './SectionTitle';
export default function Categories() {
 const categories=[
    
    
    {
      title: 'library stool',
      procucts: '3,4333333products',
      image:'/src/c4.jpg',
      
    },
     {
      title: 'library stool',
      procucts: '3,4333333products',
      image:'/src/c4.jpg',
      
    },
     {
      title: 'library stool',
      procucts: '3,4333333products',
      image:'/src/c4.jpg',
      
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
      <SectionTitle title='Top Categoried' mb='mb-11'></SectionTitle>

        <div className='slider-container features-slider w-full h-full'>
          <Slider {...settings}>
            {
            categories?.map((category,index) =>(
                <div key={index} className='p-4 h-[424px]'>
                  <div className='feature-image mb-4 relative'>
                      <img src={category?.image} alt={category?.title}/>
                      <div>

                        <h4>{category?.title}</h4>
                        <p>{category?.procucts}</p>
                        </div>
                  </div>
                 {/* <div className='feature-content'>
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
                  </div>*/}
                </div>
    
              
            ))
          }
          </Slider>
        </div>

    </div>
  )
}
