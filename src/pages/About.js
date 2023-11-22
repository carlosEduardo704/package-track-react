import React from 'react'

import './AboutStyle.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return(
    <div className='DivPrincipal'>
      <NavBar/>
      <div className='DivFooter'><Footer/></div>
    </div>
  )
}

export default About