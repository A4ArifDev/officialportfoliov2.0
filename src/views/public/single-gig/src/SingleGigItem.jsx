import React from 'react'
import {AiFillStar,AiOutlineFieldTime,AiOutlineReload} from 'react-icons/ai';
import {HiOutlineChevronDoubleRight} from 'react-icons/hi'
import thumb from '../../../../assets/images/thumb.jpg';
import { Carousel } from 'antd';
import { NavLink } from 'react-router-dom';
import ServiceCard from '../../services/src/ServiceCard';
import HeadingLine from '../../../../components/ui/HeadingLine'
import {useState, useEffect} from 'react';
import axiosClient from '../../../../lib/axios-client';
import Skeleton from '../../../../components/skeletors/Skeleton';
import { useParams } from 'react-router-dom';
import PriceTable from './PriceTable';
const SingleGigItem = () => {
    let tabBtns = document.querySelectorAll('.tab-btns .btn');//all btn selected
    
    let tabContent = document.querySelectorAll('.tab-contents .tab-content');//all content selected
    
    tabBtns.forEach((tab,index)=>{  //foreach method applying
        tab.addEventListener('click',(btn)=>{//eventlistened applying
            tabContent.forEach((content)=>{
                content.classList.remove('tab-content-active');
            });
            tabBtns.forEach((btn)=>{
                btn.classList.remove('tab-btn-active');
            });
            tabContent[index].classList.add('tab-content-active');
            tabBtns[index].classList.add('tab-btn-active');
        })
    });

    const [loading, setLoading] = useState(false);
    const [gigs, setgigs] = useState([]);
    const [fgigs, setfgigs] = useState([]);
     const loadFData = () => {
         setLoading(true);
         axiosClient.get('/gigs').then((res)=>{
             setLoading(false);
             setfgigs(res.data);
           }).catch((error)=>{
             console.log(error);
           });
     }
    const {id} = useParams();
    const loadData = () => {
        setLoading(true);
        axiosClient.get(`/gigs/${id}`).then((res)=>{
            setLoading(false);
          setgigs(res.data);
      }).catch((error)=>{
        console.log(error);
      });
    }
    useEffect(() => {
      loadData();
      loadFData();
    }, []);

  return (
   <>
        <div className="sm:flex">
            {loading ? 
            (
                <div role="status" className='mx-auto'>
                <svg className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-400 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            )
                :
            (
                <div className="basis-[60%]">
                <h2 className='sm:text-2xl md:text-3xl my-[15px] font-bold leading-[35px] dark:text-lightH'>{gigs.gig_title}</h2>
                <div className="user-details mb-[2rem] flex space-x-4 items-center">
                    <img src={thumb} alt="avatar" className='w-[50px] h-[50px] object-cover rounded-full'/>
                    <div>
                        <p className='uppercase font-semibold text-md  dark:text-lightH'>Arif Khan</p>
                    </div>
                    <div className='flex space-x-4'>
                        <p className='flex text-primary'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                        <p className='dark:text-lightP text-darkH'>({gigs.gig_rating})</p>
                    </div>
               </div>
               <div className='sm:max-w-[100%] md:max-w-[700px] mr-4'>
                        <Carousel 
                        autoplay
                        swipeToSlide
                        draggable
                        arrows={true}
                                >
                        <div className='h-[450px] relative shadow-sm'>
                            <img src={`${process.env.REACT_APP_API_BASE_URL}/gigs/${gigs.gig_image_one}`} alt="gig-images" className='w-full h-full object-cover'/>
                        </div>
                        <div className='h-[450px] relative shadow-sm'>
                            <img src={`${process.env.REACT_APP_API_BASE_URL}/gigs/${gigs.gig_image_two}`} alt="gig-images" className='w-full h-full object-cover'/>
                        </div>
                        <div className='h-[450px] relative shadow-sm'>
                            <img src={`${process.env.REACT_APP_API_BASE_URL}/gigs/${gigs.gig_image_three}`} alt="gig-images" className='w-full h-full object-cover'/>
                        </div>
                    </Carousel>
               </div>
                <div className='my-[50px]'>
                        <h2 className='text-xl font-bold  dark:text-lightH'>About The Seller</h2>
                        <div className="user-details mb-[2rem] sm:flex space-y-6 md:space-x-6 items-center my-[20px]">
                            <img src={thumb} alt="avatar" className='w-[100px] h-[100px] object-cover rounded-full'/>
                            <div>
                                <p className='uppercase font-semibold text-md  dark:text-lightH'>Arif Khan</p>
                                <p className='capitalize font-semibold text-sm my-[0.5rem]  dark:text-lightP'>Making websites that work for you!</p>
                                <NavLink to='/single-blog' className='mt-2 flex sm:inline-flex justify-center items-center border-gray-400 border-2 text-black font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-3  dark:text-lightH'>Contact Me</NavLink>
                            </div>
                            </div>
                </div>
                <div className="">
                    <h2 className='text-xl font-bold my-[20px]  dark:text-lightH'>what you will get?</h2>
                        <div>
                        <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> You can become an author/influencer. (The Boss)</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Growing a business with no border.</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Start selling your own(or others) products/services/courses</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Generating $1k-$10k/m from a single blog website.</p>
                    <p className='paragraph flex md:items-center'><HiOutlineChevronDoubleRight className='text-primary mr-2 text-[25px]'/> Dropshipping, Affiliate Marketing… What not? Actually, Sky's the limit!</p>
                        </div>
                </div>
                <div className='mt-[40px]'>
                    <PriceTable price={gigs.price} gig_title={gigs.gig_title} delivery_time={gigs.delivery_time}/>
                </div>
            </div>
            )
            }
            <div className="basis-[40%]">
                    <div className='mt-[50px] md:mt-[145px] sm:ml-[100px]'>
                    <div className="tab-container sm:w-[90%]">
                            <div className="tab-btns">
                                <div className="btn tab-btn-active  dark:text-lightH">
                                    <NavLink to=""><h3>Basic</h3></NavLink>
                                </div>
                                <div className="btn  dark:text-lightH">
                                    <NavLink to=""><h3>Standard</h3></NavLink>
                                </div>
                                <div className="btn  dark:text-lightH">
                                    <NavLink to=""><h3>Premium</h3></NavLink>
                                </div>
                            </div>
                            <div className="tab-contents">
                                <div className="tab-content tab-content-active">
                                    <div className="service-desk">
                                        <h4 className=' dark:text-lightH'>Basic website</h4>
                                        <span className=' dark:text-lightH'>${gigs.price}</span>
                                    </div>
                                    <p className='leading-9  dark:text-lightH'>Hey, I’m Muhammad Arif a Web Designer & Developer, WordPress Instructor. I’ve tons of FREE youtube tutorials on making websites. Also, I’ve premium courses on Udemy. </p>
                                    <div className="delevery-time">
                                        <div className="delevery flex items-center space-x-2">
                                            <AiOutlineFieldTime className='text-2xl text-primary'/><strong className=' dark:text-lightH'> {gigs.delivery_time} Dayas Delevery</strong>
                                        </div>
                                        <div className="delevery flex items-center space-x-2  dark:text-lightH">
                                        <AiOutlineReload className='text-2xl text-primary'/><strong>1 Rivisions</strong>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <NavLink to="" className="btn  dark:text-lightH">Continue ${gigs.price}</NavLink>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="service-desk  dark:text-lightH">
                                        <h4>Standard website</h4>
                                        <span>$200</span>
                                    </div>
                                    <p className=' dark:text-lightH'>Hey, I’m Muhammad Arif a Web Designer & Developer, WordPress Instructor. I’ve tons of FREE youtube tutorials on making websites. Also, I’ve premium courses on Udemy. </p>
                                    <div className="delevery-time">
                                        <div className="delevery flex items-center space-x-2  dark:text-lightH">
                                            <AiOutlineFieldTime className='text-2xl text-primary'/><strong> {gigs.delivery_time} Dayas Delevery</strong>
                                        </div>
                                        <div className="delevery flex items-center space-x-2">
                                        <AiOutlineReload className='text-2xl text-primary'/><strong>1 Rivisions</strong>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <NavLink to="" className="btn dark:text-lightH">Continue ${gigs.price}</NavLink>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="service-desk">
                                        <h4 className=' dark:text-lightH'>Premium website</h4>
                                        <span className=' dark:text-lightH'>${gigs.price}</span>
                                    </div>
                                    <p className=' dark:text-lightH'>Hey, I’m Muhammad Arif a Web Designer & Developer, WordPress Instructor. I’ve tons of FREE youtube tutorials on making websites. Also, I’ve premium courses on Udemy. </p>
                                    <div className="delevery-time">
                                        <div className="delevery flex items-center space-x-2  dark:text-lightH">
                                            <AiOutlineFieldTime className='text-2xl text-primary'/><strong> {gigs.delivery_time} Dayas Delevery</strong>
                                        </div>
                                        <div className="delevery flex items-center space-x-2  dark:text-lightH">
                                        <AiOutlineReload className='text-2xl text-primary'/><strong>1 Rivisions</strong>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <NavLink to="" className="btn  dark:text-lightH">Continue ${gigs.price}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>


        <div>
        <HeadingLine headLineText='Others services'/>
                <div className="grid sm:grid-cols-3 gap-[3rem] mt-[100px]">
                {fgigs.map((gig,index)=>{
                         return(
                          <>
                            {loading ? (<Skeleton/>) : (
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
                            )}
                          </>
                         );
                      })}
                    </div>
        </div>
   </>
   
  )
}

export default SingleGigItem