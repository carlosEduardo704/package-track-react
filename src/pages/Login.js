import React from 'react'
import './LoginStyle.css'
import Footer from '../components/Footer'
import LoginPage from '../components/LoginRegisterPage/LoginPage'
import NavBar from '../components/NavBar'

const Login = () => {
  return(
    <>
    <NavBar/>
    <LoginPage/>
    <Footer/>
    </>
  )
}

export default Login