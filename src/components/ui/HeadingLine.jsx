import React from 'react'
import {motion} from "framer-motion"
const headingAnimate = {
  hidden:{y:"40%"},
  visible:{y:0},
  transition:{duration:0.8}
}
const HeadingLine = (props) => {
  return (
    <>
      <div className="overflow-hidden">
      <motion.h2 variants={headingAnimate} initial="hidden" whileInView="visible" className='text-[1.7rem] md:text-[2.5rem] text-center font-bold my-[50px] text-black after:content-[""] after:bg-primary after:w-[200px] after:h-[5px] after:block after:mt-[15px] after:mx-auto dark:text-lightH'>{props.headLineText}</motion.h2>
      </div>
    </>
  )
}

export default HeadingLine