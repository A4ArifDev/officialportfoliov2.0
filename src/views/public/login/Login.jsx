import React from 'react'
import Topbar from '../../../components/ui/Topbar';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import LoginForm from '../../../components/forms/LoginForm';
const Login = () => {
  return (
    <>
       <Topbar/>
        <Navbar/>
        <LoginForm/>
        <Footer/>
   </>
  )
}

export default Login