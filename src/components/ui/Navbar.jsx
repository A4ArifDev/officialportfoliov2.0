import React, { useState , useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenuFold} from 'react-icons/ai';
import {MdLightMode, MdNightlight} from 'react-icons/md'
import {ThemeContext} from '../../contexts/themeContext'
import { NavHashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [open, setOpen] =  useState(false);
  const {theme , setTheme} = useContext(ThemeContext);
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  
  const darkToggle = (e) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("dark", theme === "light" ? "dark" : "light")
  }
  
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 40 ? setStickyClass('fixed top-0 left-0 z-50 w-full') : setStickyClass('relative');
      }
    };
  

  return (
    <>
       <div className={`bg-navLight dark:bg-mainBgDark bg-cover bg-left backdrop-blur-3xl shadow-xl transition-all ${stickyClass}`}>
       <div className="md:flex items-start md:items-center justify-between sm:px-[50px] md:px-[90px] py-[12px] px-[30px] w-full relative dark:shadow-black">
                <div className='flex justify-between items-center w-full'>
                <NavLink to='/' className='text-third dark:text-lightH text-4xl font-semibold'><h1>A4ARIF.</h1></NavLink>
                <NavLink to='/' className='md:text-third text-text text-3xl font-bold md:hidden' onClick={(e)=>{e.preventDefault(); setOpen(!open)}}><AiOutlineMenuFold /></NavLink>
                </div>
                <ul className={`transition-all md:flex items-center md:space-x-14 space-y-8 md:space-y-0 mt-[30px] md:mt-[0] ${!open ? "hidden" : "visible"}`}>
                    <li><NavHashLink to='#' smooth className='nav-links'>Home</NavHashLink></li>
                    <li><NavHashLink to='/#blog' smooth className='nav-links'>Blog</NavHashLink></li>
                    <li><NavHashLink to='/#service' smooth className='nav-links'>Service</NavHashLink></li>
                    <li><NavHashLink to='/#about' smooth className='nav-links'>About</NavHashLink></li>
                    <li><NavHashLink to='/#contact' smooth className='nav-links'>Contact</NavHashLink></li>
                    <li className='inline-block shadow-md bg-transparent dark:bg-lightP p-3 rounded-full cursor-pointer'><NavLink onClick={darkToggle}>{theme === "dark" ? (<MdLightMode className='text-white text-2xl'/>) : (<MdNightlight className='text-white text-2xl'/>)}</NavLink></li>
                </ul>
        </div>
       </div>
    </>
  )
}

export default Navbar