import React from 'react'
import SinglePortfolioItem from './SinglePortfolioItem';
const SinglePortfolioCompo = () => {
  return (
    <>
         <div className="bg-mainBgLight dark:bg-mainBgDark bg-cover bg-fixed">
            <div className='py-[2rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[100px]'>
                <SinglePortfolioItem/>
            </div>
        </div>
    </>
  )
}

export default SinglePortfolioCompo