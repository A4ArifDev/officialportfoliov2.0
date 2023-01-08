import React from 'react'
import heroImg from "../../../../assets/images/hero.png";
import Button from '../../../../components/ui/Button';
import {AiOutlineCloudDownload} from 'react-icons/ai';
import {motion} from 'framer-motion';
const Hero = () => {
  return (
    <>
      <div id="" className="bg-heroLight dark:bg-heroDark bg-cover bg-fixed flex flex-wrap content-center w-full h-full relative backdrop-blur-3xl shadow-xl dark:shadow-darkH overflow-hidden">
        <div className="md:flex w-full min-h-[90v] items-center">
           
                <div className='basis-[100%] md:basis-6/12 relative flex min-h-[90vh] items-center'>   
                        <div className='shape w-[100%] md:w-[90%] h-full absolute -z-40 dark:hidden'></div>
                        <motion.div  initial={{x:"-40%"}} animate={{x:0}} transition={{duration:0.6}} className={'z-50 bg-black w-[90%] md:w-[60%] h-[80vh] rounded-xl mx-auto md:ml-[5rem]'}>
                          <img src={heroImg} alt=""  className='w-full h-full object-cover'/>
                        </motion.div>
                </div>
               
                
                <div className='basis-6/12 px-[1.5rem] py-[2rem] md:pr-[14rem] mt-10 md:mt-[0] '>
                <div>
                  <h1 className='text-[1.5rem] md:text-[3rem] font-bold text-secondery dark:text-lightH mb-5'>Hi im <span className='text-primary'> A4 ARIF</span> A web developer</h1>
                  <p className='leading-8 text-lg paragraph dark:text-gray-300'>I am Muhammad Ar.iF, a experienced Wordpress website developer And full stack Developer. I have done hundreds of successful and converting wordpress websites. If you are in search for a professional Wordpress website developer, then you are at right place. Feel free to beep me up for your wordpress website design today</p>
                  <Button buttonText="Download Cv" url="/about" icon={<><AiOutlineCloudDownload /></>}/>
                </div>
                </div>
        </div>
        </div>
    </>
  )
}

export default Hero