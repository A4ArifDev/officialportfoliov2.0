import React from 'react'
import Topbar from '../../../components/ui/Topbar';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import RegisterForm from '../../../components/forms/RegisterForm';
const Register = () => {
  return (
    <>
         <Topbar/>
        <Navbar/>
        <RegisterForm/>
        <Footer/>
    </>
  )
}

export default Register