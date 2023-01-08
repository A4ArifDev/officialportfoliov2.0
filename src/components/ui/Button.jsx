import React from 'react'
import { NavLink } from 'react-router-dom'
const Button = (props) => {
  return (
    <>
        <div className='flex my-5'>
                 <NavLink to={props.url} className="flex items-center font-semibold relative overflow-hidden rounded-[30px] border-2 border-primary before:content-[''] before:absolute before:top-0 before:left-0 before:translate-x-[100%] before:z-10 before:transition-all before:duration-1000 before:ease-in-out	hover:before:bg-primary hover:before:translate-x-0 hover:before:w-full hover:before:h-full"><span className='px-[2rem] text-[16px] z-30 text-darkH dark:text-lightH'>{props.buttonText}</span><span className='bg-primary flex items-center justify-center rounded-full p-[.7rem] md:p-[1rem] z-[99] text-2xl'>{props.icon}</span></NavLink>
         </div>
    </>
  )
}

export default Button