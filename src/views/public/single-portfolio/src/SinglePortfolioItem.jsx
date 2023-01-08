import React from 'react'
import {useState, useEffect} from 'react';
import axiosClient from '../../../../lib/axios-client';
import { useParams } from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {BiShow} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
const SinglePortfolioItem = () => {
  const [portfolios,setportfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
     getportfolios();
    },[])
    const {id} = useParams();
  const getportfolios = () => {
      setLoading(true);
      axiosClient.get(`/portfolios/${id}`).then((res)=>{
          setLoading(false);
          setportfolios(res.data);
        }).catch((error)=>{
          console.log(error);
        });
  }
  return (
   <>
      <div className="flex flex-col md:flex-row gap-[3rem]">
           { loading ? (
            <div role="status">
            <svg className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-400 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only dark:text-lightP">Loading...</span>
        </div>
        )
         :
        (
          <>
            <div className="order-2 md:order-1 basis-[40%] rounded-lg overflow-hidden">
                <img src={`${process.env.REACT_APP_API_BASE_URL}/portfolio_thumbnails/${portfolios.full_thumbnail}`}/>
            </div>
            <div className="basis-[60%] bg-subBgLight dark:bg-subBgDark rounded-lg px-[35px] py-[30px]">
                <h1 className='text-[1rem] md:text-xl font-semibold text-center dark:text-lightP'>About This Professional Website:</h1>
                <h2 className='text-[1.2rem] md:text-3xl font-semibold text-center my-[25px] leading-10 dark:text-lightH'>{portfolios.title}</h2>
                <p className='text-[1rem] md:text-xl leading-8 dark:text-lightP'>{portfolios.description}</p>
                <div className='w-full my-[30px] flex items-center justify-center'>
                <img className='w-[400px] h-full' src={`${process.env.REACT_APP_API_BASE_URL}/portfolio_thumbnails/${portfolios.thumbnail}`}/>
                </div>
                <div className='order-1 md:order-2 flex flex-wrap justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
                        <NavLink href={`${portfolios.github_link}`} target="_blank" className='flex space-x-1 items-center bg-primary text-white py-[10px] px-[20px] rounded-md hover:bg-transparent hover:border-primary hover:border-2'>
                          <span className='font-medium'>Show Repo</span>
                          <AiFillGithub className='text-white text-3xl'/>
                        </NavLink>
                        <NavLink href={`${portfolios.code_link}`} target="_blank" className='flex space-x-1 items-center bg-primary text-white py-[10px] px-[20px] rounded-md hover:bg-transparent hover:border-primary hover:border-2'>
                        <span className='font-medium'>View Code</span>
                              <BsCodeSlash className='text-white text-3xl'/>
                        </NavLink>
                        <NavLink href={`${portfolios.view_link}`} target="_blank" className='flex space-x-1 items-center bg-primary text-white py-[10px] px-[20px] rounded-md hover:bg-transparent hover:border-primary hover:border-2'>
                              <span className='font-medium'>View Poroject</span>
                              <BiShow className='text-white text-3xl'/>
                        </NavLink>
                </div>
                <div className='my-[25px]'>
                    <h2 className='text-[1.1rem] md:text-2xl font-semi-bold text-primary mb-8'>Technology Used:</h2>
                    <ul className='marker:text-primay flex flex-col'>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>HTML</li>
                        <li className='sidebar-active-nav-links  dark:!bg-darkF'>CSS</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>TAILWIND CSS</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>JSX</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>REACT JS</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>LARAVEL</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>PHP V8.1.0</li>
                    </ul>
                </div>
                <div className="my-[25px]">
                <h2 className='text-[1.1rem] md:text-2xl font-semi-bold text-primary mb-8'>Feautes Added in This Website:</h2>
                    <ul className='marker:text-primay flex flex-col'>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>CUSTOMZABLE LAYOUT</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>SMART AND DYNAMIC DASHBOARD PATTERN</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>DYNAMIC BLOG POSTING SYSTEM</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>DYNAMIC GIG POSTING STYSTEM</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>DYNAMIC REGISTER ADDING TECHNOLOGI</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>COUNTING EVERY BLOG THAT POSTED</li>
                        <li className='sidebar-active-nav-links dark:!bg-darkF'>DIGITAL ADMIN DASHBOARD TOOLS AND AI TECHNOLOGY</li>
                    </ul>
                </div>
            </div>
            </>
        )}
      </div>
   </>
  )
}

export default SinglePortfolioItem