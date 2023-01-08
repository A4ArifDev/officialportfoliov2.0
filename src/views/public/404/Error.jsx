import React from 'react'
import Topbar from '../../../components/ui/Topbar';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import ErrorBanner from './src/ErrorBanner';
const Error = () => {
  return (
    <>
        <Topbar/>
        <Navbar/>
        <ErrorBanner/>
        <Footer/>
    </>
  )
}

export default Error