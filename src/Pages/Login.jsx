

import React from 'react'
import SignUpLogin from '../Components/SignUpLogin'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Login = () => {
  return (
    <>
    <Navbar/>
    <SignUpLogin login={true}/>
    <Footer/>
    </>
  )
}

export default Login