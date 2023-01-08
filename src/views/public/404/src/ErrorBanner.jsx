import React from 'react'
import Button from '../../../../components/ui/Button';
import {BiSad} from 'react-icons/bi';
import {FaDove} from 'react-icons/fa';
const ErrorBanner = () => {
  return (
    <>
        <div className="bg-mainBgLight dark:bg-mainBgDark bg-cover flex flex-col justify-center items-center min-h-[70vh]">
                <h1 className='text-[4rem] flex items-center dark:text-white'>404 ERROR PAGE NOT FOUND <BiSad className='text-[5rem] ml-[1rem]' /> </h1>
                <Button buttonText="Return To Home" url="/" icon={<><FaDove /></>}/>
        </div>
    </>
  )
}

export default ErrorBanner