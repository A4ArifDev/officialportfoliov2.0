import React from 'react'

const ExperienceCard = (props) => {
  return (
   <>
    <div className='border border-indigo-100 dark:border-lightP rounded-md transition-all shadow-md p-[1.5rem]  flex flex-col hover:translate-y-2 ease-in-out dark:bg-darkH'>
        <h2 className='text-[3rem] font-bold text-secondery dark:text-lightH'>{props.count}+</h2>
        <p className='pl-[3rem] uppercase text-[1.2rem] tracking-[2px] dark:text-lightP'>{props.state}</p>
    </div>
   </>
  )
}

export default ExperienceCard