import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../lib/axios-client';
import { useAuthContext } from '../../contexts/AuthContext';
const AddingBlogForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState();
  const {setNotification} = useAuthContext();
  const [inputs, setinputs] = useState({
    title:'',
    description:'',
    tag:'',
    category:'',
    thumbnail:''
  });
 
  const changeHandler = ({target}) => {
    const {name, value, files} = target
    setinputs({
      ...inputs,
      [name]: files ? files[0] : value
    })
  }
  const{title, description, tag, category, thumbnail} = inputs;
  const formData = new FormData();
  formData.append('title',title)
  formData.append('description',description);
  formData.append('tag',tag)
  formData.append('category',category)
  formData.append('thumbnail',thumbnail);

const submitHandler = (e) => {
  e.preventDefault();
  axiosClient.post('/blogs', formData).then((res)=>{
      if(res.data.status === true){
        navigate('/blogs');
        setNotification("Blog SuccessFully Created");
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
        <div className='py-[1.5rem] px-[15px] md:px-[90px] md:pb-[90px] md:pt-[50px] blog'>
          <div className="flex flex-col justify-center min-h-[50vh] max-w-[650px] mx-auto ">
              <div className="flex justify-between mb-[2rem] px-[2rem]">
                      <h2 className='text-[1.5rem] font-semibold dark:text-white'>Adding Blog Form</h2>
              </div>
            <form className="bg-transparent dark:bg-[#0B1120] border border-transparent shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Blog Title
                </label>
                <input className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="username" type="text" placeholder="Username" name="title" onChange={changeHandler} />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Blog Description
                </label>
                <textarea className="shadow-md appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" placeholder='Blog Description' name="description" onChange={changeHandler}></textarea>
                </div>

                <div className="mb-6 mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Upload Blog Thumbnail
                </label>
                 
                <input type="file" name="thumbnail"  onChange={changeHandler} class="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-200 file:text-primary
                            hover:file:bg-violet-100
                    "/>
                </div>

                {thumbnail && (<img width={"250px"} src={URL.createObjectURL(thumbnail)}/>)}

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Blog Tags
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Blog Tag" name="tag" onChange={changeHandler}/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Category
                </label>
                <input className="bg-transparent shadow appearance-none border border-b-gray-400 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Blog Category" name="category" onChange={changeHandler} />
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                </button>
                </div>
            </form>
            {errors && ( <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="font-medium">{Object.keys(errors).map((key)=>{ return (<p key={key}>{errors[key][0]}</p>)})}</span> 
                    </div>
                  </div>)}
        </div>
        </div>
      </div>
    </>
  )
}

export default AddingBlogForm