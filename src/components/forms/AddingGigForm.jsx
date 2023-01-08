import React from 'react'
import { useState } from 'react';
import axiosClient from '../../lib/axios-client';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddingGigForm = () => {

  const {setNotification} = useAuthContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState();
  const [inputs, setinputs] = useState({
    gig_title:'',
    gig_star:'',
    gig_rating:'',
    delivery_time:'',
    price:'',
    gig_image_one:'',
    gig_image_two:'',
    gig_image_three:''
  });
 
  const changeHandler = ({target}) => {
    const {name, value, files} = target
    setinputs({
      ...inputs,
      [name]: files ? files[0] : value
    })
  }
  const{gig_title, gig_star, gig_rating, delivery_time, price, gig_image_one, gig_image_two, gig_image_three} = inputs;
  const formData = new FormData();
  formData.append('gig_title',gig_title)
  formData.append('gig_star',gig_star);
  formData.append('gig_rating',gig_rating)
  formData.append('delivery_time',delivery_time)
  formData.append('price', price)
  formData.append('gig_image_one',gig_image_one);
  formData.append('gig_image_two',gig_image_two);
  formData.append('gig_image_three',gig_image_three);

const submitHandler = (e) => {
  e.preventDefault();
  axiosClient.post('/gigs', formData).then((res)=>{
    if(res.data.status === true){
      setNotification("Gig Successfully Created");
      navigate('/admin/gigs');
    }
}).catch((error)=>{
  const response = error.response;
  if(response && response.status === 422){
    setErrors(response.data.errors);
    console.log(response.data.errors);
  }
})
 
}


  return (
    <>
    <div className="basis-[75%] px-4 md:px-[40px] py-[30px] overflow-auto flex-1">
        <div className='md:px-[90px] md:pb-[90px] md:pt-[50px] blog'>
        <div className="flex flex-col justify-center min-h-[50vh] max-w-[650px] mx-auto ">
            <div className="flex justify-between mb-[2rem] px-[2rem]">
                    <h2 className='text-[1.5rem] font-semibold dark:text-white'>Adding Gig Form</h2>
            </div>
            <form className="bg-transparent dark:bg-[#0B1120] border border-transparent shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gig_title">
                    Gig title
                </label>
                <input className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="gig_title" type="text" placeholder="Gig title" name="gig_title" onChange={changeHandler}/>
                </div>

                <div className="pb-4  mt-6 border border-b-gray-400">
                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="Gig_image_one">
                    Upload gig_image One
                </label>
                <input type="file" name="gig_image_one" onChange={changeHandler} className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primary
                            hover:file:bg-violet-100
                    "/>
                </div>
                {gig_image_one && (<img width={"250px"} src={URL.createObjectURL(gig_image_one)}/>)}
                
                <div className="pb-4 mb-2 mt-6 border border-b-gray-400">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gig_image_two">
                    Upload Gig gig_image  Two
                </label>
                <input type="file" name="gig_image_two" onChange={changeHandler}  className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primary
                            hover:file:bg-violet-100
                    "/>
                </div>
                {gig_image_two && (<img width={"250px"} src={URL.createObjectURL(gig_image_two)}/>)}
                
                <div className="pb-4 mb-2 mt-6 border border-b-gray-400">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gig_image_three">
                    Upload Gig gig_image_Three
                </label>
                <input type="file" name="gig_image_three" onChange={changeHandler}  className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primary
                            hover:file:bg-violet-100
                    "/>
                </div>
                {gig_image_three&& (<img width={"250px"} src={URL.createObjectURL(gig_image_three)}/>)}
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="star">
                    Gig Start
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Blog gig_rating" name="gig_star" onChange={changeHandler}/>
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                    Gig Rating
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Blog gig_rating" name="gig_rating" onChange={changeHandler}/>
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    Delivery Days
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Blog gig_rating" name="delivery_time" onChange={changeHandler}/>
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Gig Price
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Gig Price" name="price" onChange={changeHandler}/>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                </button>
                </div>
            </form>
            
            {errors && ( <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">{Object.keys(errors).map((key)=>{ return (<p key={key}>{errors[key][0]}</p>)})}</span> 
                    </div>
                  </div>)}
        </div>
        </div>
      </div>
    </>
  )
}

export default AddingGigForm