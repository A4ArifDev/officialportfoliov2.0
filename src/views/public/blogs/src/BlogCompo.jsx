import React from 'react'
import HeadingLine from '../../../../components/ui/HeadingLine'
import BlogCard from './BlogCard'
import { NavLink } from 'react-router-dom'
import {useState, useEffect} from 'react';
import axiosClient from '../../../../lib/axios-client';
import Skeleton from '../../../../components/skeletors/Skeleton';
import ReactPaginate from 'react-paginate';
import {motion} from "framer-motion"
const BlogCompo = () => {
  const [blogs,setblogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
     getblogs();
    },[])
  const getblogs = () => {
      setLoading(true);
      axiosClient.get('/blogs').then((res)=>{
          setLoading(false);
          setblogs(res.data);
        }).catch((error)=>{
          console.log(error);
        });
  }

  const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0)
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 3;
       useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
       },[itemOffset, itemsPerPage, blogs]);

        
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % blogs.length;
            setItemOffset(newOffset);
        };

  return (
    <>
      <div className="bg-aboutLight dark:bg-aboutDark bg-cover bg-scroll md:bg-fixed content-center w-full">
       <div className='py-[2rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[30px] overflow-hidden'>
            <HeadingLine headLineText="Our Latest Blogs"/>
            <motion.div initial={{x:"100%"}} animate={{x:"0"}} transition={{duration:0.7}} className="grid sm:grid-cols-2 md:grid-cols-3 gap-[5rem]">
            {loading ? 
            (<><Skeleton/><Skeleton/><Skeleton/></>)  
            :
            (
              <>
              {currentItems.map((blog,index)=>{
                return(
                  <>
                      <BlogCard
                        key={index}
                        id={blog.id}
                        title={blog.title}
                        thumbnail={blog.thumbnail}
                        description={blog.description}
                        tag={blog.tag}
                        category={blog.category}
                        created_at={blog.created_at}
                        loading = {loading}
                    />
                  </>
                )})}
                </>
                 )}
            </motion.div>
              <div className='flex items-center justify-center mt-[50px]'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                    containerClassName="paginate-container"
                    pageLinkClassName='paginate-link'
                    previousLinkClassName='paginate-link'
                    nextLinkClassName='paginate-link'
                    activeClassName='paginate-active'
                />
            </div>
        </div>
        </div>
    </>
  )
}

export default BlogCompo