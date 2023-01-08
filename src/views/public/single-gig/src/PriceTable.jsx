import React from 'react'
import { NavLink } from 'react-router-dom'
const PriceTable = (props) => {
  return (
    <>     
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Package
                        </th>
                        <td scope="col" className="px-6 py-3">
                            <div>
                                <span className="text-lg font-semibold my-2 text-darkH dark:text-lightP">${props.price}</span>
                                <h2 className='text-xl font-bold my-2 text-darkF dark:text-lightH'>Basic</h2>
                                <p className='text-sm leading-7 text-darkH dark:text-lightP font-light'>{props?.gig_title?.slice(0,90)}</p>
                            </div>
                        </td>
                        <td scope="col" className="px-6 py-3">
                            <div>
                                    <span className="text-lg font-semibold my-2 text-darkH dark:text-lightP">${props.price}</span>
                                    <h2 className='text-xl font-bold my-2 text-darkF dark:text-lightH'>Standard</h2>
                                    <p className='text-sm leading-7 text-darkH dark:text-lightP font-light'>{props?.gig_title?.slice(0,90)}</p>
                                </div>
                        </td>
                        <td scope="col" className="px-6 py-3">
                            <div>
                                    <span className="text-lg font-semibold my-2 text-darkH dark:text-lightP">${props.price}</span>
                                    <h2 className='text-xl font-bold my-2 text-darkF dark:text-lightH'>Premium</h2>
                                    <p className='text-sm leading-7 text-darkH dark:text-lightP font-light'>{props?.gig_title?.slice(0,90)}</p>
                                </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Rivisions
                        </th>
                        <td className="px-6 py-4">
                            2
                        </td>
                        <td className="px-6 py-4">
                            5
                        </td>
                        <td className="px-6 py-4">
                            9
                        </td>
                       
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Delivery Time
                        </th>
                        <td className="px-6 py-4">
                                <div className="flex items-center pl-3">
                                    <input id="basic-normal" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500" checked/>
                                    <label htmlFor="basic-normal" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">8 Days </label>
                                </div>
                                <div className="flex items-center pl-3">
                                    <input id="basic-urgent" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="basic-urgent" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5 Days</label>
                                </div>
                                <p className='paragrap pl-3'>(+$100)</p>
                        </td>
                        <td className="px-6 py-4">
                                <div className="flex items-center pl-3">
                                    <input id="standard-normal" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500" checked/>
                                    <label htmlFor="standard-normal" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">8 Days </label>
                                </div>
                                <div className="flex items-center pl-3">
                                    <input id="standard-urgent" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="standard-urgent" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5 Days</label>
                                </div>
                                <p className='paragrap pl-3'>(+$100)</p>
                        </td>
                        <td className="px-6 py-4">
                                <div className="flex items-center pl-3">
                                    <input id="premium-normal" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="premium-normal" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">8 Days </label>
                                </div>
                                <div className="flex items-center pl-3">
                                    <input id="premium-urgent" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="premium-urgent" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5 Days</label>
                                </div>
                                <p className='paragrap pl-3'>(+$100)</p>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Total
                        </th>
                        <td className="px-6 py-4 text-center">
                             <p className='paragraph'>$900</p>
                             <div className="btn-box">
                                        <NavLink to="" className="btn dark:text-lightH">Continue</NavLink>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <p className='paragraph'>$900</p>
                             <div className="btn-box">
                                        <NavLink to="" className="btn dark:text-lightH">Continue </NavLink>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <p className='paragraph'>$900</p>
                             <div className="btn-box">
                                        <NavLink to="" className="btn dark:text-lightH">Continue</NavLink>
                            </div>
                        </td>
                      
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default PriceTable