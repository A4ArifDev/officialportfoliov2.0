import React from 'react'
import thumb from '../../../../assets/images/thumb.jpg';
import {useState, useEffect} from 'react';
import axiosClient from '../../../../lib/axios-client';
import { useParams } from 'react-router-dom';
import {BiCategory} from 'react-icons/bi';
import {AiFillTags} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
const SingleBlogItem = () => {
  const [blogs,setblogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
       getblogs();
      },[])
      const {id} = useParams();
    const getblogs = () => {
        setLoading(true);
        axiosClient.get(`/blogs/${id}`).then((res)=>{
            setLoading(false);
            setblogs(res.data);
          }).catch((error)=>{
            console.log(error);
          });
    }
  return (
    <>
    <div className="bg-aboutLight dark:bg-aboutDark bg-cover bg-fixed">
        <div className='py-[2rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[100px]'>
          <div className="flex flex-col items-center mx-auto">
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
              <div className='max-w-[500px] flex flex-col items-center mx-auto'>
              <p className='uppercase font-semibold text-sm text-center dark:text-lightP'>{blogs.category}</p>
              <h2 className='capitalize text-xl md:text-2xl font-bold my-[2rem] dark:text-lightH'>{blogs.title}</h2>
             <div className="user-details mb-[2rem] flex space-x-3 items-center">
                  <img src={thumb} alt="" className='w-[80px] h-[80px] object-cover rounded-full'/>
                  <div>
                      <p className='uppercase font-semibold text-md dark:text-lightH'>A4AriF Dev</p>
                      <p className='uppercase text-sm dark:text-lightP'>CEO Of CodingX</p>
                  </div>
             </div>
          </div>
          <img className='w-[800px] h-[400px] object-cover rounded-xl' src={`${process.env.REACT_APP_API_BASE_URL}/blog_thumbnails/${blogs.thumbnail}`} alt="" />
          <div className='max-w-[500px] flex flex-col items-center mx-auto my-[3rem]'>
          <div className='flex justify-around items-center w-full my-[10px]'>
                  <NavLink>
                      <p className='flex space-x-2 items-center'>
                          <BiCategory className='text-primary font-bold text-lg'/>
                          <span className='text-secondery uppercase text-sm font-bold dark:text-lightP'>{blogs.category}</span>
                      </p>
                  </NavLink>
                 <NavLink>
                      <p className='flex space-x-2 items-center'>
                              <AiFillTags className='text-primary font-bold text-lg'/>
                              <span className='text-secondery uppercase text-sm font-bold dark:text-lightP'>{blogs.tag}</span>
                      </p>
                 </NavLink>
              </div>
              <p className='article leading-8 text-justify dark:text-lightP'>
                {blogs.description}
              <br />
              <br />
              {blogs.description}</p>
          </div>
          </>
            )
          }
          </div>
       </div>
    </div>
    </>
  )
}

export default SingleBlogItem