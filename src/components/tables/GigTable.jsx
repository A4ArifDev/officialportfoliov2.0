import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axiosClient from '../../lib/axios-client';
import TableSkeletor from '../skeletors/TableSkeletor';
import ReactPaginate from 'react-paginate';
import { useAuthContext } from '../../contexts/AuthContext'
const GigTable = () => {
    const [gigs,setgigs] = useState([]);
    const {setNotification, notification} = useAuthContext();
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
    // delete handler
    const deleteHandler = (g) => {
        if(!window.confirm("Are You Sure to Want delete This Blog??")){
            return
        }
        axiosClient.delete(`/gigs/${g.id}`).then((res)=>{
            getgigs();
            setNotification("Gig Successfully Deleted");
        }).catch((error)=>{
            console.log(error);
        })
    }

    // pagination
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
         <div className="basis-[75%] px-4 md:px-[40px] py-[100px] overflow-y-hidden flex-1">
                    <div className='flex items-start md:items-center justify-between mx-[20px] mb-[30px]'>
                        <h2 className='font-medium text-lg md:text-2xl text-black dark:text-white'>All Gigs</h2>
                        <NavLink to="/admin/add-gig" className='flex space-x-1 items-center bg-[rgb(105,142,255)] text-white py-[10px] px-[20px] rounded-md'><span className='font-medium'>Add New</span></NavLink>
                    </div>
                    {loading ?(
                    <TableSkeletor/>
                ) : (
                    <div className="overflow-auto shadow-lg border border-transparent rounded-lg p-[2rem] w-full dark:bg-[#0B1120]">
                        <table className="divide-y divide-gray-300 w-full ">
                                <thead className="bg-transparent">
                                    <tr>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            ID
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Gig Title
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Gig Image One
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Gig Image Two                            
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Gig Image Three
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Gig Star
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Gig Rating
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Delivery Days
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Price
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Edit
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-transparent divide-y divide-gray-300">
                                {currentItems.map((g, i)=>{
                                    return(
                                    <tr className="whitespace-nowrap" key={i}>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        {g.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">
                                            {g.gig_title.slice(0,10)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">
                                            {g.gig_image_one}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">
                                            {g.gig_image_two}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">
                                            {g.gig_image_three}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        {g.gig_star}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {g.gig_rating}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        {g.delivery_time}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        {g.price}
                                        </td>
                                        
                                        <td className="px-6 py-4">
                                            <NavLink to={`/admin/edit-gig/${g.id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </NavLink>
                                        </td>
                                        <td className="px-6 py-4">
                                            <NavLink to="" onClick={(e)=>{deleteHandler(g)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </NavLink>
                                        </td>
                                    </tr>
                                )
                            })}
                             </tbody>
                            </table>
                    </div>)}
                    {notification && ( <div className="flex p-4 my-8 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Info</span>
                                                <div>
                                                    <span className="font-medium">{notification}</span>
                                                </div>
                                                </div>)}
            <div className='flex items-center justify-center mt-[50px]'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="paginate-container"
                    pageLinkClassName='admin-paginate-link'
                    previousLinkClassName='admin-paginate-link'
                    nextLinkClassName='admin-paginate-link'
                    activeClassName='paginate-active'
                />
            </div>
        </div>
    </>
  )
}

export default GigTable