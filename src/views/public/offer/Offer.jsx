import React from 'react';
import HeadingLine from '../../../components/ui/HeadingLine';
import workImg from '../../../assets/images/work.gif';
import {HiOutlineChevronDoubleRight} from 'react-icons/hi';
import {motion} from "framer-motion"
const Offer = () => {
  return (
    <>
     <div className="bg-offerLight dark:bg-offerDark bg-cover bg-fixed flex flex-wrap content-center w-full md:h-screen relative">
            <div className='py-[1rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[30px]'>
                <HeadingLine headLineText={<>What might happen within the next 60 days <br/> if you launch your website today!</>}/>
                <div className="md:flex items-center justify-between">
                    <div className='basis-[50%] pr-2'>
                        <p className='paragraph'>According to various recent studies, surprisingly 67% - 73% businesses/entrepreneurs don’t have their websites! It’s ridiculous! Luckily, that's the biggest catch! And here’s the opportunities for you:</p>
                        <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> You can become an author/influencer. (The Boss)</p>
                        <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Growing a business with no border.</p>
                        <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Start selling your own(or others) products/services/courses</p>
                        <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Generating $1k-$10k/m from a single blog website.</p>
                        <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Dropshipping, Affiliate Marketing… What not? Actually, Sky's the limit!</p>
                    </div>
                    <div className='basis-[50%]'>
                        <motion.img initial={{x:"100%"}} animate={{x:"0"}} transition={{duration:0.5}}  src={workImg} alt="" />
                    </div>
                </div>
            </div>
     </div>
    </>
  )
}

export default Offer