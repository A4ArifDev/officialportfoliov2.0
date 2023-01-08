import React from 'react'
import Topbar from '../../../components/ui/Topbar';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import Hero from './src/Hero';
import About from '../about/About';
import Offer from '../offer/Offer';
import Portfolio from '../portfolios/Portfolio';
import Blog from '../blogs/Blog';
import Service from '../services/Service';
import Contact from '../contact/Contact';
const Home = () => {
  return (
    <>
        <Topbar/>
        <Navbar/>
        <Hero/>
        <About/>
        <Offer/>
        <Portfolio/>
        <Blog/>
        <Service/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home