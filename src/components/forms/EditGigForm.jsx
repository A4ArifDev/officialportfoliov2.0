import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../lib/axios-client';
import { useAuthContext } from '../../contexts/AuthContext';
const EditGigForm = () => {
    
  const navigate = useNavigate();
  const [errors, setErrors] = useState();
  const {setNotification} = useAuthContext();
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
 

  const {id} = useParams();

  const loadData = () => {

    axiosClient.get(`/gigs/${id}`).then((res)=>{
      setinputs({
          gig_title:res.data.gig_title,
          gig_star:res.data.gig_star,
          gig_rating:res.data.gig_rating,
          delivery_time:res.data.delivery_time,
          price:res.data.price,
          gig_image_one:res.data.gig_image_one,
          gig_image_two:res.data.gig_image_two,
          gig_image_three:res.data.gig_image_three,
        });

    }).catch((error)=>{
      console.log(error);
    });
  }
  useEffect(() => {
    loadData();
  }, []);

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
  axiosClient.post(`/gigs/${id}`, formData).then((res)=>{
    if(res.data.status === true){
      navigate('/gigs');
      setNotification("Gig Updated Successfully");
    }
}).catch((error)=>{
  const response = error.response;
  if(response && response.status === 422){
    setErrors(response.data.errors);
    console.log(error);
  }
})
}


  return (
    <>
    <div className="basis-[75%] px-4 md:px-[40px] py-[30px] overflow-auto flex-1">
        <div className='md:px-[90px] md:pb-[90px] md:pt-[50px] blog'>
        <div className="flex flex-col justify-center min-h-[50vh] max-w-[650px] mx-auto ">
            <div className="flex justify-between mb-[2rem] px-[2rem]">
                    <h2 className='text-[1.5rem] font-semibold dark:text-white'>Updating Gig Form</h2>
            </div>
            <form className="bg-transparent border border-transparent shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gig_title">
                    Gig gig_title
                </label>
                <input className="dark:text-white shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="gig_title" type="text" placeholder="Gig gig_title" name="gig_title" onChange={changeHandler} value={inputs.gig_title}/>
                </div>

                <div className="pb-4  mt-6 border border-b-gray-400">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Gig_image_one">
                    Upload gig_image One
                </label>
                <input type="file" name="gig_image_one" onChange={changeHandler} className="block w-full text-sm text-  slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primary
                            hover:file:bg-violet-100
                    "/>
                </div>
                  <br />
                  {typeof gig_image_one=== 'object' && (<img width={"250px"} src={URL.createObjectURL(gig_image_one)}/>)}
                  { typeof gig_image_ !== 'object' && (<img  src={`http://127.0.0.1:8000/gigs/${inputs.gig_image_one}`} alt="" width='250px' />)}
                
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
                  <br />
                  {typeof gig_image_two === 'object' && (<img width={"250px"} src={URL.createObjectURL(gig_image_two)}/>)}
                { typeof gig_image_two !== 'object' && (<img  src={`http://127.0.0.1:8000/gigs/${inputs.gig_image_two}`} alt="" width='250px' />)}
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
                    "
                    />
                </div>
                <br />
                {typeof gig_image_three=== 'object' && (<img width={"250px"} src={URL.createObjectURL(gig_image_three)}/>)}
                { typeof gig_image_three !== 'object' && (<img  src={`http://127.0.0.1:8000/gigs/${inputs.gig_image_three}`} alt="" width='250px' />)}

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="star">
                    Gig Start
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Blog gig_rating" name="gig_star" onChange={changeHandler} value={inputs.gig_star}/>
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                    Gig Rating
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Blog gig_rating" name="gig_rating" onChange={changeHandler} value={inputs.gig_rating}/>
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    Delivery Days
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Blog gig_rating" name="delivery_time" onChange={changeHandler} value={inputs.delivery_time}/>
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Gig Price
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Gig Price" name="price" onChange={changeHandler} value={inputs.price}/>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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

export default EditGigForm