import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {TfiLayoutSliderAlt} from 'react-icons/tfi'
import {AiOutlinePicture} from 'react-icons/ai'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {CiLogout} from 'react-icons/ci'
import {BiMessageRounded} from 'react-icons/bi'
import {BsCardText} from 'react-icons/bs';
import {RiMenu3Fill} from 'react-icons/ri'
import {MdOutlineDarkMode} from 'react-icons/md' 
import {MdOutlineLightMode} from 'react-icons/md' 
import {ThemeContext} from '../../contexts/themeContext';
import axiosClient from '../../lib/axios-client';
import {useAuthContext} from '../../contexts/AuthContext';
const SideBar = () => {
  const {user,setUser, setToken} = useAuthContext();
  const menus = [
    {name:"dashboard", link:"/admin/dashboard", icon:AiOutlineHome},
    {name:"blogs", link:"/admin/blogs", icon:TfiLayoutSliderAlt},
    {name:"gigs", link:"/admin/gigs", icon:AiOutlinePicture},
    {name:"users", link:"/admin/users", icon:AiOutlineUsergroupAdd},
    {name:"messages", link:"/admin/messages", icon:BiMessageRounded},
    {name:"portfolios", link:"/admin/portfolios", icon:BsCardText},
  ]
  const [open, setOpen] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);
  useEffect(()=>{  
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);
  const themeChangle = () => {
    setTheme( theme === "dark" ? "light" : "dark" );
    localStorage.setItem("dark", theme === "light" ? "dark" : "light");
  }
  const menuToggler = () => {
    setOpen(!open)
  }
  const logoutHandler = () => {
   axiosClient.post('/logout').then(()=>{
    setUser({});
    setToken(null); 
   }).catch((error)=>{
    console.log(error);
   });
  }
  useEffect(()=>{
    axiosClient.get('/loggedUser').then(({data})=>{
      setUser(data);
    }).catch((error)=>{
      console.log(error);
    });
  },[])
  return (
    <>
        <div className={`${open ? "basis-[250px]" : "basis-[66px] md:basis-[18%]"} bg-subBgLight py-[30px] dark:bg-sideBarBgDark h-full overflow-hidden transition-al flex justify-around flex-col`}>
                  <ul className='flex justify-between items-center px-2 md:px-[20px]'>
                    <NavLink to="/">
                      <h2 className={`${!open && "hidden"} md:block uppercase text-2xl text-[rgb(105,142,255)] font-medium}`}>{user?.user?.name}</h2>
                    </NavLink>
                    <img className='p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hidden md:block'  src={`http://127.0.0.1:8000/avatars/${user?.user?.profile}`} alt="avatar"/>
                    <span className={`hover:bg-[#7e97e348] rounded-full p-3 transition-all md:hidden`}><RiMenu3Fill  className='text-[#698EFF] text-2xl cursor-pointer' onClick={menuToggler}/></span>
                  </ul>
                  <ul className='mt-[10px]'>
                      {menus.map((menu, i)=>{
                        return(
                          <li key={i}>
                            <NavLink className={({ isActive }) => (isActive ? 'sidebar-active-nav-links' : 'sidebar-nav-links')} to={menu.link}>{React.createElement(menu.icon, {className:'text-[#698EFF] text-2xl flex-none'})}<span className={`text-sm font-medium capitalize flex-none ${!open && "hidden md:block"}`}>{menu.name}</span></NavLink>
                          </li>
                        )
                      })}
                  </ul>
                  <ul className='mt-[10px] px-1 md:px-4'>
                      <NavLink className="nav-links-bottom !py-2" onClick={themeChangle}>
                        <div className='bg-[#7e97e348] hover:bg-[rgb(105,142,255)] transition-all p-2 rounded-full'>
                        {theme == "light" ? (<MdOutlineDarkMode className='text-white text-xl'/>) : (<MdOutlineLightMode className='text-white text-xl'/>)}
                          </div>
                          <span className={`${!open && "hidden md:block"} text-sm font-medium capitalize flex-none`}>Theme</span>
                      </NavLink>
                      <NavLink onClick={logoutHandler} className="nav-links-bottom"><CiLogout className='text-[#698EFF] text-xl flex-none'/><span className={`text-sm font-medium capitalize flex-none ${!open && "hidden md:block"}`}>Logout</span></NavLink>
                  </ul>
        </div>
    </>
  )
}

export default SideBar