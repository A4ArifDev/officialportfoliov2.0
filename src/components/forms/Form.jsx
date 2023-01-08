import React from 'react'
import { useState } from 'react';
import axiosClient from '../../lib/axios-client';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import { useAuthContext } from '../../contexts/AuthContext';
const Form = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState();
  const {notification,setNotification} = useAuthContext();
  const [inputs, setinputs] = useState({
    name:'',
    email:'',
    message:'',
  });
 
  const changeHandler = ({target}) => {
    const {name, value} = target
    setinputs({
      ...inputs,
      [name]: value
    })
  }
  const{name, email, message} = inputs;
  const formData = new FormData();
  formData.append('name',name)
  formData.append('email',email);
  formData.append('message',message)


const submitHandler = (e) => {
  e.preventDefault();
  axiosClient.post('/messages', formData).then((res)=>{
    if(res.data.status === true){
      setNotification("Message SuccessFully Send");
      setinputs({
        name:'',
        email:'',
        message:'',
      })
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
  <motion.div className='' initial={{x:"100%"}} whileInView={{x:"0"}} transition={{duration:0.7}} >
  <form className="bg-transparent border border-transparent shadow-lg rounded px-8 pt-6 pb-8 mb-4 dark:bg-darkH" onSubmit={submitHandler}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="name" type="text" placeholder="Name" name="name" onChange={changeHandler} value={inputs.name}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" onChange={changeHandler} value={inputs.email} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
        Message
      </label>
      <textarea className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" name="message" onChange={changeHandler} value={inputs.message}></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Send
      </button>
    </div>
  </form>
   {notification && ( <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Info</span>
                                                <div>
                                                    <span className="font-medium">{notification}</span>
                                                </div>
                                                </div>)}
      {errors && ( <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">{Object.keys(errors).map((key)=>{ return (<p key={key}>{errors[key][0]}</p>)})}</span> 
                    </div>
                  </div>)}
</motion.div>
    </>
  )
}

export default Form