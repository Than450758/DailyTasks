import React from 'react'
import SectionTitle from './SectionTitle'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function Product() {

    const [active, setActive]=useState({
        id:1,
        product : 'newest'
    });
    const  productTitle=[
        {
            id:0,
            title:'all',
            product:'all'
        },
         {
            id:1,
            title:'newest',
            product:'newest'
        },
         {
            id:2,
            title:'rending',
            product:'rending'
        },
         {
            id:3,
            title:'best seller',
            product:'best-selller'
        },
    ]
    const products=[
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
      product:'all'
    },
     {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
      product:'all'
    },
     {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
      product:'all'
    },
         {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
      product:'newest'
    },
     {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c4.jpg',
      currentPrice:'$24',
      product:'newest'
    },
     {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c4.jpg',
      currentPrice:'$24',
      product:'newest'
    },
     {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
      product:'rending'
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c7.jpg',
      currentPrice:'$24',
      product:'rending'
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c6.jpg',
      currentPrice:'$24',
      product:'rending'
    },
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c3.jpg',
      currentPrice:'$24',
      product:'best seller'
    },
        {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c1.jpg',
      currentPrice:'$24',
      product:'best-seller'
    },
        
    {
      title: 'library stool',
      status: 'New',
      price:'$234',
      image:'/src/c2.jpg',
      currentPrice:'$24',
      product:'best-seller'
    },
        
    ];
     const settings={
    dots: false,
    infinite: true,
    speed: 1000,
    slideToShow:3,
    slidesToScroll:3
  };
  const productFilter = products.filter(product => product.product === active?. product);
  console.log (productFilter);
  
  return (
    <div className='lg-container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
            <SectionTitle title={'Our products'} textAlign={'center'} mb={'mb-5'}></SectionTitle>
            <div className='flex items-center justify-center gap-6'>


                {
                productTitle?.map((title,index)=>(
                    <button  key={title?.id} 
                     onClick={()=>setActive({
                            id:title?.id,
                            product: title?.product
                        })
                    }
                    className={`text-sm font-black uppercase cursor-pointer ${active?.id === index ? 'text-[#272343]':'text-[#9a9caa]'}`}>{title?.title}</button>
                ))
            }
            </div>
        </div>
                <div className='grid grid-cols-4 items-center gap-6'>
                    {
                            productFilter?.map((product,index)=>(
                                   <div key={index} className='p-4'>
                                                  <div className='feature-image mb-4 relative'>
                                                      <img src={product?.image} alt={product?.title}/>
                                                      {
                                                        product?.status &&(
                                                          <div>
                                                            <button>{product?.status}</button>
                                                          </div>
                                                        )
                                                      
                                                      }
                                                          
                                                  </div>
                                                  <div className='feature-content'>
                                                    <div className='flex items-center justify-between'>
                                                      <h4 className='mb-4'>{product?.title}</h4>
                                                      <span className='bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center'>
                                                        <FontAwesomeIcon icon={faShoppingCart} size='1.5rem' color='#fff'/>
                                                      </span>
                                                    </div>
                                                    <p>
                                                      {product?.price}
                                                      {
                                                        product?.currentPrice &&(
                                                          <span>{product?.currentPrice}</span>
                                                        )}
                                                      
                                                    </p>
                                                  </div>
                                                </div>
                            ))
                    }
                </div>
    </div>
  )
}
