import React from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
import { Carousel } from 'antd';

const SliderServiceImage = (props) => {

  
  return (
    <>

    <Carousel 
            autoplay
            swipeToSlide
            draggable
            arrows={true}
      >
        <div className='h-[220px] relative shadow-sm'>
            <img src={`${process.env.REACT_APP_API_BASE_URL}/gigs/${props.gig_image_one}`} alt="gig_image" className='w-full h-full object-cover'/>
            <div className='absolute top-[40%] left-0 bg-primary p-[.5rem] rounded-r-full flex items-center space-x-2 shadow-md cursor-pointer'>
                <span className='text-[24px] text-text'><AiOutlineArrowRight /></span>
            </div>
            <div className='absolute top-[40%] right-0 bg-primary p-[.5rem] rounded-l-full flex items-center space-x-2 shadow-md cursor-pointer'>
                <span className='text-[24px] text-text'><AiOutlineArrowLeft /></span>
            </div>
        </div>
        <div className='w-full h-[220px] relative shadow-sm'>
            <img src={`${process.env.REACT_APP_API_BASE_URL}/gigs/${props.gig_image_two}`} alt="gig_image" className='w-full h-full object-cover'/>
            <div className='absolute top-[40%] left-0 bg-primary p-[.5rem] rounded-r-full flex items-center space-x-2 shadow-md cursor-pointer'>
                <span className='text-[24px] text-text'><AiOutlineArrowRight /></span>
            </div>
            <div className='absolute top-[40%] right-0 bg-primary p-[.5rem] rounded-l-full flex items-center space-x-2 shadow-md cursor-pointer'>
                <span className='text-[24px] text-text'><AiOutlineArrowLeft /></span>
            </div>
        </div>
        <div className='w-full h-[220px] relative shadow-sm'>
            <img src={`${process.env.REACT_APP_API_BASE_URL}/gigs/${props.gig_image_three}`} alt="gig_image" className='w-full h-full object-cover'/>
            <div className='absolute top-[40%] left-0 bg-primary p-[.5rem] rounded-r-full flex items-center space-x-2 shadow-md cursor-pointer'>
                <span className='text-[24px] text-text'><AiOutlineArrowRight /></span>
            </div>
            <div className='absolute top-[40%] right-0 bg-primary p-[.5rem] rounded-l-full flex items-center space-x-2 shadow-md cursor-pointer'>
                <span className='text-[24px] text-text'><AiOutlineArrowLeft /></span>
            </div>
        </div>
      </Carousel>
         
    </>
  )
}

export default SliderServiceImage


// import './Carousel.css' 
