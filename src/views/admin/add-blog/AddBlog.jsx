import React from 'react'
import SideBar from '../../../components/ui/SideBar';
import AddingBlogForm from '../../../components/forms/AddingBlogForm';
const Blog = () => {
  return (
    <div className='bg-mainBgLight dark:bg-mainBgDark min-h-[100vh] bg-cover flex items-center justify-center'>
        <div className='w-[98%] md:w-[80%] bg-subBgLight dark:bg-subBgDark  rounded-lg h-screen md:h-[80vh] flex gap-0 md:gap-4 transition-all'>
            <SideBar/>
            <AddingBlogForm/>
        </div>
    </div>
  )
}

export default Blog