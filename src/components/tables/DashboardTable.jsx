import React from 'react'
import { NavLink } from 'react-router-dom'
import {HiOutlineHome} from 'react-icons/hi'
import {BsCollection} from 'react-icons/bs'
import {TfiGallery} from 'react-icons/tfi'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {CiLogout} from 'react-icons/ci'
import {BiMessageRounded} from 'react-icons/bi'
import {RiMenu3Fill} from 'react-icons/ri'
import {BsArrowUpShort} from 'react-icons/bs'

const DashboardTable = () => {
   
  return (
    <>
    <div className="flex-1 px-[10px] md:px-[40px] py-[20px] md:py-[100px] overflow-auto">
                    <div className='flex justify-between mx-[20px] mb-[30px]'>
                        <h2 className='font-medium text-2xl text-black dark:text-white'>Admin Dashboard</h2>
                    </div>
                <div className='w-full mx-auto'>
                   
       <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white dark:bg-[#0B1120] shadow-md rounded-md py-5 px-5 hover:translate-y-2 transition-all'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col space-y-3'>
                            <h4 className='font-medium text-gray-600 dark:text-[#E2E8F0]'>All Blogs</h4>
                            <h3 className='font-medium text-black text-2xl dark:text-white'>300</h3>
                        </div>
                        <div className='bg-[rgb(105,142,255)] p-4 rounded-full'>
                            <BsCollection className='text-white text-xl'/>
                        </div>
                    </div>
                    <div className='flex items-center mt-3 space-x-3'>
                        <span className='bg-[#CCF5E7] px-2 py-1 rounded-md flex items-center space-x-0'><BsArrowUpShort className='text-lg'/> <span className='text-sm font-medium'>13%</span></span>
                        <span className='text-[13px] font-meidum dark:text-[#E2E8F0]'>Since Last Month</span>
                    </div>
            </div>
            <div className='bg-white dark:bg-[#0B1120] shadow-md rounded-md py-5 px-5 hover:translate-y-2 transition-all'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col space-y-3'>
                            <h4 className='font-medium text-gray-600 dark:text-[#E2E8F0]'>All Gigs</h4>
                            <h3 className='font-medium text-black text-2xl dark:text-white'>06</h3>
                        </div>
                        <div className='bg-[#30c9d1] p-4 rounded-full'>
                            <TfiGallery className='text-white text-xl'/>
                        </div>
                    </div>
                    <div className='flex items-center mt-3 space-x-3'>
                        <span className='bg-[#CCF5E7] px-2 py-1 rounded-md flex items-center space-x-0'><BsArrowUpShort className='text-lg'/> <span className='text-sm font-medium'>13%</span></span>
                        <span className='text-[13px] font-meidum dark:text-[#E2E8F0]'>Since Last Month</span>
                    </div>
            </div>
            <div className='bg-white shadow-md dark:bg-[#0B1120] rounded-md py-5 px-5 hover:translate-y-2 transition-all'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col space-y-3'>
                            <h4 className='font-medium text-gray-600 dark:text-[#E2E8F0]'>All Users</h4>
                            <h3 className='font-medium text-black text-2xl dark:text-white'>300</h3>
                        </div>
                        <div className='bg-pink-400 p-4 rounded-full'>
                            <AiOutlineUsergroupAdd className='text-white text-xl'/>
                        </div>
                    </div>
                    <div className='flex items-center mt-3 space-x-3'>
                        <span className='bg-[#CCF5E7] px-2 py-1 rounded-md flex items-center space-x-0'><BsArrowUpShort className='text-lg'/> <span className='text-sm font-medium'>13%</span></span>
                        <span className='text-[13px] font-meidum dark:text-[#E2E8F0]'>Since Last Month</span>
                    </div>
            </div>
            <div className='bg-white shadow-md dark:bg-[#0B1120] rounded-md py-5 px-5 hover:translate-y-2 transition-all'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col space-y-3'>
                            <h4 className='font-medium text-gray-600 dark:text-[#E2E8F0]'>All Messages</h4>
                            <h3 className='font-medium text-black text-2xl dark:text-white'>100</h3>
                        </div>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <BiMessageRounded className='text-white text-xl'/>
                        </div>
                    </div>
                    <div className='flex items-center mt-3 space-x-3'>
                        <span className='bg-[#CCF5E7] px-2 py-1 rounded-md flex items-center space-x-0'><BsArrowUpShort className='text-lg'/> <span className='text-sm font-medium'>13%</span></span>
                        <span className='text-[13px] font-meidum dark:text-[#E2E8F0]'>Since Last Month</span>
                    </div>
            </div>
       </div>
       </div>
       </div>
    </>
  )
}

export default DashboardTable