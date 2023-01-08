import React from 'react'
import Topbar from '../../../components/ui/Topbar'
import Navbar from '../../../components/ui/Navbar'
import Footer from '../../../components/ui/Footer'
import SingleBlogCompo from './src/SingleBlogItem'
import {Helmet} from 'react-helmet-async';
const SingleBlog = () => {
  return (
    <>
         <Helmet>
          <title>CodingX | Blogs</title>
          <meta name="description" content=" If you are in search for a professional website developer, then you are at right place. Feel free to beep me up for your Website design today."></meta>
          <link rel="canonical" href="/single-blog"></link>
        </Helmet>
        <Topbar/>
        <Navbar/>
        <SingleBlogCompo/>
        <Footer/>
    </>
  )
}

export default SingleBlog