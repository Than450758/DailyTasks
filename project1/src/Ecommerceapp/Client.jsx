import React from 'react'
import SectionTitle from './SectionTitle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';

export default function Client() {
    const clientSays=[
        {
            id:1,
            description: 'ofkjf lorem vkodsvj vjoidzv ivosdv vj odsifv gs  fdos dsi ios fdireg vuriso vjo vjos v vosv sdfoifvbjfo eroghi jkg g90agjp09 ig0ose gj i0es j 0er9g j 0p j',
            name:'Jond sdo',
            position:'CEO,Company'
        },
        {
            id:2,
            description: 'ofkjf lorem vkodsvj vjoidzv ivosdv vj odsifv gs  fdos dsi ios fdireg vuriso vjo vjos v vosv sdfoifvbjfo eroghi jkg g90agjp09 ig0ose gj i0es j 0er9g j 0p j',
            name:'Jond sdo',
            position:'CEO,Company'
        },
        {
            id:3,
            description: 'ofkjf lorem vkodsvj vjoidzv ivosdv vj odsifv gs  fdos dsi ios fdireg vuriso vjo vjos v vosv sdfoifvbjfo eroghi jkg g90agjp09 ig0ose gj i0es j 0er9g j 0p j',
            name:'Jond sdo',
            position:'CEO,Company'
        },
        {
            id:4,
            description: 'ofkjf lorem vkodsvj vjoidzv ivosdv vj odsifv gs  fdos dsi ios fdireg vuriso vjo vjos v vosv sdfoifvbjfo eroghi jkg g90agjp09 ig0ose gj i0es j 0er9g j 0p j',
            name:'Jond sdo',
            position:'CEO,Company'
        },
    ]

    const settings={
    dots: false,
    infinite: true,
    speed: 1000,
    slideToShow:2,
    slidesToScroll:1
  };
  return (
    <div className='lg:container mx-aut0'>
        <SectionTitle title='What is client says about us' mb='mb-11'></SectionTitle>

        <div className='slider-container feature-slider  w-full h-full'>
          <Slider {...settings}>
            {
            clientSays?.map((client,index) =>(
                <div key={index} className='p-4'>
                  
                  <p className='client-say-description'>{client?.description} </p>
                    <div className='flex items-center'>
                        <h4><FontAwesomeIcon icon={faUser}/></h4>
                    </div>
                </div>
    
              
            ))
          }
          </Slider>
        </div>
    </div>
  );
}
