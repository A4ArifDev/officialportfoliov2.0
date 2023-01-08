import React from 'react'
import HeadingLine from '../../../../components/ui/HeadingLine'
import ServiceCard from './ServiceCard'
import {useState, useEffect} from 'react';
import axiosClient from '../../../../lib/axios-client';
import Skeleton from '../../../../components/skeletors/Skeleton';
import ReactPaginate from 'react-paginate';
import {motion} from "framer-motion"
const ServiceCompo = () => {
  const [gigs,setgigs] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(()=>{
       getgigs();
      },[])
    const getgigs = () => {
        setLoading(true);
        axiosClient.get('/gigs').then((res)=>{
            setLoading(false);
            setgigs(res.data);
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
  setCurrentItems(gigs.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(gigs.length / itemsPerPage));
 },[itemOffset, itemsPerPage, gigs]);

  
  const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % gigs.length;
      setItemOffset(newOffset);
  };
  return (
    <>
             <div className="bg-serviceLight dark:bg-serviceDark bg-cover bg-fixed content-center w-full min-h-[90vh]">
                <div className='py-[2rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[30px]'>
                    <HeadingLine headLineText='Im Available For You'/>
                    <motion.div initial={{x:"-100%"}} animate={{x:"0"}} transition={{duration:0.7}}  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[5rem]">
                    {loading ? 
                      (<><Skeleton/><Skeleton/><Skeleton/></>)  
                      :
                      (
                        <>
                      {currentItems.map((gig,index)=>{
                         return(
                          <>
                          <ServiceCard
                          key={index}
                          id={gig.id}
                          gig_title={gig.gig_title}
                          gig_image_one={gig.gig_image_one}
                          gig_image_two={gig.gig_image_two}
                          gig_image_three={gig.gig_image_three}
                          gig_rating={gig.gig_rating}
                          gig_star={gig.gig_star}
                          delivery_time={gig.delivery_time}
                          price={gig.price}
                          />
                          </>
                         );
                      })}
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

export default ServiceCompo