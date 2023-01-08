import React from 'react'
import Button from './Button'
import HeadingLine from './HeadingLine'
import {FaDove} from 'react-icons/fa';
const AboutBanner = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center min-h-[60vh] bg-portLight dark:bg-aboutDark bg-cover bg-fixed">
                <HeadingLine headLineText="Helping You To Create Successful Website"/>
                <Button buttonText="Make My Website" url="/service" icon={<><FaDove /></>}/>
        </div>
    </>
  )
}

export default AboutBanner