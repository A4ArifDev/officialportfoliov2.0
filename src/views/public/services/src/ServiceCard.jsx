import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import {NavLink} from 'react-router-dom'
import SliderServiceImage from './SliderServiceImage';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {useState} from 'react'
const ServiceCard = (props) => {
  const [favourite, setFavourite] = useState({isFavourite:false});
  const favouriteHandler = (e) => {
    setFavourite((prev)=>{
      return{
        ...prev,
        isFavourite:!prev.isFavourite
      }
    })
  }
  return (
    <>
    <div className='bg-transparent shadow-lg hover:translate-y-3 transition-all border border-gray-300 dark:border-darkF rounded-md min-w-[350px] lg:w-[100%] dark:bg-darkH dark:shadow-darkF'>
      <NavLink to={'/single-gig/'+props.id}>
          <SliderServiceImage
                   gig_image_one={props.gig_image_one}
                   gig_image_two={props.gig_image_two}
                   gig_image_three={props.gig_image_three}
            />
      </NavLink>
        <div className='p-[15px] border-b-2  border-gray-300 dark:border-gray-700'>
          <NavLink to={'/single-gig/'+props.id}><p className='hover:text-primary dark:hover:text-primary dark:text-lightP leading-7'>{props.gig_title.slice(0,80)}...</p></NavLink>
            <div className="flex items-center justify-between mt-4">
                <p className='flex items-center leading-8 text-lg dark:text-lightP'><AiFillStar className='text-primary text-[20px] mr-2'/> {props.gig_star} ({props.gig_rating})</p>
                <p className='leading-8 text-lg dark:text-lightP'><span>{props.delivery_time} Days</span> Delivary</p>
            </div>
        </div>
        <div className="flex py-[10px] px-[15px] justify-between items-center paragraph">
                <div>{favourite.isFavourite ? <AiFillHeart className='text-xl cursor-pointer' onClick={favouriteHandler}/> : 
                  <AiOutlineHeart className='text-2xl cursor-pointer' onClick={favouriteHandler}/>}</div>
                <p className='leading-8 dark:text-lightP'>Starting At - ${props.price}</p>
        </div>
    </div>
</>
  )
}

export default ServiceCard







