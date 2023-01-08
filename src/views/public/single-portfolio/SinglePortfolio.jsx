import React from 'react'
import Topbar from '../../../components/ui/Topbar'
import Navbar from '../../../components/ui/Navbar'
import Footer from '../../../components/ui/Footer'
import SinlgePortfolioCompo from './src/SinglePortfolioCompo';
import {Helmet} from 'react-helmet-async';
const SinglePortfolio = () => {
  return (
      <>
          <Helmet>
          <title>CodingX | Portfolios</title>
          <meta name="description" content=" If you are in search for a professional website developer, then you are at right place. Feel free to beep me up for your Website design today."></meta>
          <link rel="canonical" href="/single-portfolio"></link>
        </Helmet>
        <Topbar/>
        <Navbar/>
        <SinlgePortfolioCompo/>
        <Footer/>
      </>
  )
}

export default SinglePortfolio