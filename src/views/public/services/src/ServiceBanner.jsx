import React from 'react'
import Button from './Button'
import HeadingLine from './HeadingLine'
import {FaDove} from 'react-icons/fa';
const ServiceBanner = () => {
  return (
    <>
         <div className="flex flex-col justify-center items-center min-h-[60vh] bg-aboutLight dark:bg-aboutDark bg-cover bg-scroll">
                <HeadingLine headLineText={<>Do You Need A Professional Website? <br/>You are in the exact place !</>}/>
                <Button buttonText="Make My Website" url="/service" icon={<><FaDove /></>}/>
        </div>
    </>
  )
}

export default ServiceBanner