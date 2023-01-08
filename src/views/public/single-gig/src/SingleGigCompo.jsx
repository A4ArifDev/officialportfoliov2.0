import React from 'react'
import SingleGigItem from './SingleGigItem';
const SingleGigCompo = () => {
  return (
    <>
        <div className="bg-aboutLight dark:bg-aboutDark bg-cover bg-fixed">
            <div className='py-[2rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[100px]'>
                <SingleGigItem/>
            </div>
        </div>
    </>
  )
}

export default SingleGigCompo