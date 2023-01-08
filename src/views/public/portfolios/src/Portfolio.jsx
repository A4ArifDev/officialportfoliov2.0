import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {BiShow} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
const Portfolio = (props) => {
  return (
    <>
        <div className="max-w-sm bg-transparent border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
     <div className='w-full relative shadow-sm group'>
                <img src={`${process.env.REACT_APP_API_BASE_URL}/portfolio_thumbnails/${props.thumbnail}`} alt="portfolio_image" className='w-full h-[220px] object-cover'/>
                <div className='absolute bg-lightH dark:bg-darkF  top-[-600px] group-hover:top-0 left-0 transition-all w-full h-full flex items-center justify-center space-x-4'>
                    <a href={`${props.github_link}`} target="_blank" className='flex items-center justify-center w-12 h-12 rounded-full bg-primary'>
                          <AiFillGithub className='text-white text-3xl'/>
                    </a>
                    <a href={`${props.code_link}`} target="_blank" className='flex items-center justify-center w-12 h-12 rounded-full bg-primary'>
                          <BsCodeSlash className='text-white text-3xl'/>
                    </a>
                    <a href={`${props.view_link}`} target="_blank" className='flex items-center justify-center w-12 h-12 rounded-full bg-primary'>
                          <BiShow className='text-white text-3xl'/>
                    </a>
            </div>
       </div>
    <div className="p-5">
        <NavLink to={'/single-portfolio/'+props.id}>
            <h3 className="mb-2 text-[1.2rem] font-bold tracking-tight text-gray-900 dark:text-white leading-8 hover:text-primary dark:hover:text-primary transition-all">{props.title}</h3>
        </NavLink>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-7">{props.description.slice(0,100)}...</p>
    </div>
</div>
    </>
  )
}

export default Portfolio