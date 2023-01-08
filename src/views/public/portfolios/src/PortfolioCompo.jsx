import React from 'react'
import Portfolio from './Portfolio';
import HeadingLine from '../../../../components/ui/HeadingLine';
import {useState, useEffect} from 'react';
import axiosClient from '../../../../lib/axios-client';
import Skeleton from '../../../../components/skeletors/Skeleton';
import ReactPaginate from 'react-paginate';
import {motion} from "framer-motion"
const PortfolioCompo = () => {
   const [portfolios,setportfolios] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(()=>{
      getportfolios();
     },[])
   const getportfolios = () => {
       setLoading(true);
       axiosClient.get('/portfolios').then((res)=>{
           setLoading(false);
           setportfolios(res.data);
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
         setCurrentItems(portfolios.slice(itemOffset, endOffset));
         setPageCount(Math.ceil(portfolios.length / itemsPerPage));
        },[itemOffset, itemsPerPage, portfolios]);
 
         
         const handlePageClick = (event) => {
             const newOffset = (event.selected * itemsPerPage) % portfolios.length;
             setItemOffset(newOffset);
         };
  return (
    <>
        <div className="bg-mainBgLight dark:bg-aboutDark bg-cover bg-scroll md:bg-fixed content-center w-full" id='portfolio'>
           <div className='py-[2rem] px-[1.5rem] md:px-[120px] md:pb-[90px] md:pt-[30px] overflow-hidden'>
            <HeadingLine headLineText="At A Glance To Our Portfolios"/>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[3rem]">
               {loading ? 
            (<><Skeleton/><Skeleton/><Skeleton/></>)  
            :
            (
              <>
              {currentItems.map((portfolio,index)=>{
                return(
                  <>
                      <Portfolio
                        key={index}
                        id={portfolio.id}
                        title={portfolio.title}
                        thumbnail={portfolio.thumbnail}
                        description={portfolio.description}
                        github_link={portfolio.github_link}
                        code_link={portfolio.category}
                        view_link={portfolio.view_link}
                        loading = {loading}
                    />
                  </>
                )})}
                </>
                 )}
            </div>
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

export default PortfolioCompo