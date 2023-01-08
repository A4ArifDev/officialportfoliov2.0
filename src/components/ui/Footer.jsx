import React from 'react'
import {NavLink} from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import {AiOutlineCopyright} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
     <div className="bg-darkH dark:bg-navDark bg-cover bg-fixed w-full">
        <div className='py-[2rem] px-[1.5rem] md:px-[90px] md:pb-[50px] md:pt-[30px]'>
            <div className="md:flex md:space-x-[20px] space-y-[20px]">
                <div className="basis-[25%]">
                    <h2 className='text-[2.5rem] uppercase my-[10px] text-text'>a4arif</h2>
                    <p className='pb-[20px] leading-10 text-md text-lightP'>All solutions here. Now you can launch your amazing website within a week. And you will get support from the world's one of the top rated web developers.</p>
                </div>
                <div className="basis-[25%]">
                    <h2 className='text-[1.6rem] my-[10px] text-text'>Quic tour</h2>
                    <ul>
                        <li><NavHashLink smooth to='/#blog' className='text-lightP text-sm font-bold uppercase my-[10px] hover:text-primary inline-block'>Blogs</NavHashLink></li>
                        <li><NavHashLink smooth to='/#contact' className='text-lightP text-sm font-bold uppercase my-[10px] hover:text-primary inline-block'>Contact</NavHashLink></li>
                        <li><NavHashLink smooth to='/#about' className='text-lightP text-sm font-bold uppercase my-[10px] hover:text-primary inline-block'>About</NavHashLink></li>
                        <li><NavHashLink smooth to='/#service' className='text-lightP text-sm font-bold uppercase my-[10px] hover:text-primary inline-block'>ProService</NavHashLink></li>
                        <li><NavHashLink smooth to='/#portfolio' className='text-lightP text-sm font-bold uppercase my-[10px] hover:text-primary inline-block'>Portfolios</NavHashLink></li>
                    </ul>
                </div>
                <div className="basis-[25%]">
                    <h2 className='text-[1.6rem] my-[10px] text-text'>Most Pupular Services</h2>
                    <ul>
                        <li><NavHashLink smooth to='/#service' className='text-lightP text-sm uppercase font-bold my-[10px] hover:text-primary inline-block'>Make My complete Website</NavHashLink></li>
                        <li><NavHashLink smooth to='/#service' className='text-lightP text-sm uppercase font-bold my-[10px] hover:text-primary inline-block'>Custom WordPress Website Creation</NavHashLink></li>
                        <li><NavHashLink smooth to='/#service' className='text-lightP text-sm uppercase font-bold my-[10px] hover:text-primary inline-block'>Bussiness Website</NavHashLink></li>
                        <li><NavHashLink smooth to='/#service' className='text-lightP text-sm uppercase font-bold my-[10px] hover:text-primary inline-block'>Portfolio Website</NavHashLink></li>
                    </ul>
                </div>
                <div className="basis-[25%]">
                    <h2 className='text-[1.6rem] my-[10px] text-text'>Hit Right Now !</h2>
                    <ul>
                        <li><a href="https://www.freecodecamp.org/" target={"_blank"} className='text-lightP text-sm my-[10px] hover:text-primary inline-block px-[2.5rem] py-[0.7rem] border-2 border-primary rounded-full'>TUTORIAL</a></li>
                        <li><a href="https://www.fiverr.com/a4arif" target={"_blank"} className='text-lightP text-sm my-[10px] hover:text-primary inline-block px-[2.5rem] py-[0.7rem] border-2 border-primary rounded-full'>HIRE A DEVELOPER</a></li>
                        <li><a href="https://www.betterlyf.com/articles/inspirational-quotes/islamic-quotes/" target={"_blank"} className='text-lightP text-sm my-[10px] hover:text-primary inline-block px-[2.5rem] py-[0.7rem] border-2 border-primary rounded-full'>GET A QUOTE</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-black dark:bg-darkH'>
                <h2 className='text-[1.3rem] sm:text-[1.5rem] text-text text-center py-[1rem] items-center flex justify-center'><AiOutlineCopyright className='mr-2'/>All Rights Reserved By A4ARIF 2023</h2>
        </div>
         </div>
    </>
  )
}

export default Footer