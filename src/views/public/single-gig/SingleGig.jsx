import React from 'react'
import Topbar from '../../../components/ui/Topbar'
import Navbar from '../../../components/ui/Navbar'
import Footer from '../../../components/ui/Footer'
import SingleGigCompo from './src/SingleGigCompo'
import {Helmet} from 'react-helmet-async';
const SingleGig = () => {
  return (
    <>
          <Helmet>
          <title>CodingX | Services</title>
          <meta name="description" content=" If you are in search for a professional website developer, then you are at right place. Feel free to beep me up for your Website design today."></meta>
          <link rel="canonical" href="/single-service"></link>
        </Helmet>
        <Topbar/>
        <Navbar/>
        <SingleGigCompo/>
        <Footer/>
    </>
  )
}

export default SingleGig