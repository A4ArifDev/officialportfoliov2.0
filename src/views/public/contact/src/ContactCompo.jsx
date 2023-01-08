import React from 'react'
import HeadingLine from '../../../../components/ui/HeadingLine'
import {HiOutlineChevronDoubleRight} from 'react-icons/hi';
import Form from '../../../../components/forms/Form';
const ContactCompo = () => {
  return (
   <>
         <div className="bg-offerLight dark:bg-offerDark bg-cover w-full md:h-screen">
                <div className='py-[2rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[30px]'>
                    <HeadingLine headLineText='Get Connected with us'/>
                <div className="md:flex items-center justify-between">
                <div className='basis-[50%] pr-2'>
                   <h2 className='my-[10px] font-semibold text-[1.5rem] sm:text-[2rem] dark:text-lightH'>What We Prefer?</h2>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> You can become an author/influencer. (The Boss)</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Growing a business with no border.</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Start selling your own(or others) products/services/courses</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Generating $1k-$10k/m from a single blog website.</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Dropshipping, Affiliate Marketing… What not? Actually, Sky's the limit!</p>
                </div>
                <div className='basis-[50%] md:mx-[8rem]'>
                    <Form />
                </div>
            </div>
            </div>
            </div>
   </>
  )
}

export default ContactCompo