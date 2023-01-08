import React from 'react'
import HeadingLine from '../../../../components/ui/HeadingLine';
import Button from '../../../../components/ui/Button';
import ExperienceCard from './ExperienceCard'
import {FaDove} from 'react-icons/fa';
import {motion} from 'framer-motion';
const AboutCompo = () => {
  return (
    <>
     <div className="bg-aboutLight dark:bg-aboutDark bg-cover bg-fixed flex flex-wrap content-center w-full">
        <div className='py-[1.5rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[30px]'>
        <HeadingLine headLineText="A Short Description About Me"/>
        <div className="md:flex items-center space-y-[2rem] md:space-y-0">
            <div className='basis-[50%] md:pr-[5rem]'>
                <div className='overflow-hidded'>
                    <motion.h2 initial={{y:"100%"}} animate={{y:"0"}} transition={{duration:0.7}}  className='text-[1.6rem] md:text-[2rem] font-semibold dark:text-lightH my-5'>INFORMATION ABOUT ME</motion.h2>
                </div>
                <div className='overflow-hidden'>
                  <motion.p initial={{y:"100%"}} animate={{y:"0"}} transition={{duration:0.7}} className='leading-8 text-lg dark:text-lightP'>I am Frontend Developer and wordpress. I have developed Many Categories websites and i am ready to create Professional and Responsive Wordpress Website Design for you Business and grow up your business for get more clients. My Expertise on various Kind of Technologies like Full Expert in Wordpress HTML5 CSS Javascript Wix website design Shopify Website design or store</motion.p>
                </div>
                <Button buttonText="I Need A Website" url="/about"  icon={<><FaDove /></>}/>
            </div>
            <div className='basis-[45%]'>
                   <div className='grid sm:grid-cols-2	gap-[2rem]'>
                    <motion.div initial={{y:"-100%"}} animate={{y:"0"}} transition={{duration:0.7}}>
                      <ExperienceCard count={3.5} state="YEARS OF LEARING"/>
                    </motion.div>
                    <motion.div initial={{y:"-100%"}} animate={{y:"0"}} transition={{duration:0.7}}>
                        <ExperienceCard count={500} state="FOLLOWING EXPERT"/>
                    </motion.div>
                    <motion.div initial={{y:"100%"}} animate={{y:"0"}} transition={{duration:0.7}}>
                    <ExperienceCard count={100} state="COURSE COMPLETE"/>
                    </motion.div>
                    <motion.div initial={{y:"100%"}} animate={{y:"0"}} transition={{duration:0.7}}>
                    <ExperienceCard count={80} state="PROJECTS COMPLETE"/>
                    </motion.div>
                   </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default AboutCompo;