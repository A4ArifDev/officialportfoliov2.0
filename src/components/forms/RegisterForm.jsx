import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../lib/axios-client';
import { useAuthContext } from '../../contexts/AuthContext';
const RegisterForm = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);
    const [inputs, setinputs] = useState({
      name:'',
      email:'',
      bio:'',
      password:'',
      password_confirmation:''
    });
    const [profile, setprofile] = useState({
      profile:''
    });

    const changeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setinputs({
        ...inputs,
        [name] : value
      })
    }
const{name, email, bio, password, password_confirmation} = inputs;
const formData = new FormData();
    formData.append('name',name)
    formData.append('email',email);
    formData.append('bio',bio)
    formData.append('password',password)
    formData.append('password_confirmation',password_confirmation)
    formData.append('profile',profile);
const {setUser, setToken} = useAuthContext();
  const submitHandler = (e) => {
    e.preventDefault();
    axiosClient.post('/register', formData).then(({data})=>{
        setUser(data.user);
        setToken(data.token);
    }).catch((error)=>{
          const response = error.response;
          if(response && response.status === 422){
            setErrors(response.data.errors);
            console.log(response.data.errors);
          }
    });
  }

  return (
    <>
        <div className='bg-mainBgLight dark:bg-mainBgDark bg-cover py-[1.5rem] px-[1.5rem] md:px-[90px] md:pb-[90px] md:pt-[50px] min-h-[80vh]'>
        <div className="flex flex-col justify-center min-h-[50vh] max-w-[450px] mx-auto ">
            <div className="flex justify-between mb-[2rem] px-[2rem]">
                    <h2 className='text-[1.5rem] font-semibold dark:text-white'>Resigtation Form</h2>
            </div>
            <form className="bg-transparent dark:bg-subBgDark border border-transparent shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" name="name" id="name" type="text" placeholder="Username"  onChange={changeHandler}/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" name="email" id="email" type="email" placeholder="Email"  onChange={changeHandler}/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                    Enter Bio
                </label>
                <textarea className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" placeholder='Enter Bio' name="bio"  onChange={changeHandler}></textarea>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="password" type="password" placeholder="*****************"  name="password"  onChange={changeHandler}/>
                <p className="text-red-500 text-xs italic mt-4">Please choose Confirmation password.</p>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Confirm Password
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password_confirmation" type="password" placeholder="******************" name="password_confirmation"  onChange={changeHandler}/>
                <p className="text-red-500 text-xs italic">Please choose Confirmation password.</p>
                </div>
                <div className="mb-6 mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Upload A Profile
                </label>
                <input type="file" name="profile"  onChange={(e)=>{setprofile(e.target.files[0])}}  className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primary
                            hover:file:bg-violet-100
                    "/>
                    <br />
                    
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Register
                </button>
                </div>
                <div className='flex justify-center space-x-2 mt-5'>
                    <p className='dark:text-white'>Already Registerd?</p><NavLink to="/login" className="text-purple-900">Login</NavLink>
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
    </>
  )
}

export default RegisterForm