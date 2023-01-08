import React from 'react'
import { FaFacebook } from "react-icons/fa";
import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub, AiFillStar} from 'react-icons/ai'

const Topbar = () => {
  return (
    <>
              <div className="sm:flex justify-between items-center bg-secondery dark:bg-darkH py-[7px] sm:px-[50px] md:px-[90px] w-full hidden shadow-lg dark:shadow-black">
                  <div className="flex items-center space-x-2">
                                <a href="https://twitter.com/A4arifD" className='topbar-icons' target="_blank"><AiOutlineTwitter /></a>
                                <a href="https://www.facebook.com/profile.php?className=100070994926914" className='topbar-icons'><FaFacebook /></a>
                                <a href="https://www.linkedin.com/in/a4-arif-dev-506014246/" className='topbar-icons' target="_blank"><AiFillLinkedin /></a>
                                <a href="https://github.com/A4ArifDev/" className='topbar-icons' target="_blank"><AiFillGithub /></a>
                                <span><a href="https://www.a4arif.elementfx.com/about.php" className="text-text dark:text-lightP uppercase font-bold text-[15px] hover:text-primary hover:transition-all" target="_blank">Get in touched</a></span>
                  </div>
                  <div className="flex items-center space-x-2">
                            <a className='topbar-icons' target="_blank">< AiFillStar /></a>
                            <span><a href="https://www.awakenthegreatnesswithin.com/50-inspirational-islamic-quotes-on-god-life-success-the-hereafter/" className="text-text uppercase font-bold text-[15px] hover:text-primary hover:transition-all dark:text-lightP" target="_blank">Get a quote</a></span>
                  </div>
              </div>
    </>
  )
}

export default Topbar