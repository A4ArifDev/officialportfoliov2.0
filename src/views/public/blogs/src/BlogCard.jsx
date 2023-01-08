import React from 'react'
import heroImg from '../../../../assets/images/hero.png'
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiCategory} from 'react-icons/bi';
import {AiFillTags} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'

const BlogCard = (props) => {
  return (
    <>
        <div className='bg-transparent border border-transparent shadow-lg hover:translate-y-3 transition-all dark:bg-darkH rounded-xl overflow-hidden'>
            <div className='w-full h-[220px] relative shadow-sm'>
                <img src={`${process.env.REACT_APP_API_BASE_URL}/blog_thumbnails/${props.thumbnail}`} alt="blog_thumbnail" className='w-full h-full object-cover'/>
                <div className='absolute top-[20%] left-0 bg-primary p-[.5rem] rounded-r-full flex items-center space-x-2 shadow-md'>
                    <span className='text-[28px] text-text'><AiOutlineFieldTime /></span>
                    <span className='text-[1rem] text-text'>{props.created_at.slice(0,10)}</span>
                </div>
            </div>
            <div className='p-[15px]'>
                <div className='flex justify-between items-center'>
                    <NavLink>
                        <p className='flex space-x-2 items-center'>
                            <BiCategory className='text-primary font-bold text-lg'/>
                            <span className='text-secondery uppercase text-sm font-bold dark:text-lightP'>{props.category}</span>
                        </p>
                    </NavLink>
                   <NavLink>
                        <p className='flex space-x-2 items-center'>
                                <AiFillTags className='text-primary font-bold text-lg'/>
                                <span className='text-secondery uppercase text-sm font-bold dark:text-lightP'>{props.tag}</span>
                        </p>
                   </NavLink>
                </div>
                <h3 className='my-[10px] text-[1.2rem] font-semibold dark:text-lightH'>{props.title}</h3>
                <p className='paragraph'>{props.description.slice(0,75)}...</p>
                <NavLink to={'/single-blog/'+props.id} className='flex sm:inline-flex justify-center items-center bg-primary text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-3 shadow-md'>Read More</NavLink>
            </div>
        </div>
    </>
  )
}

export default BlogCard