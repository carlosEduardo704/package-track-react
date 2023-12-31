import React from 'react'
import './HomeStyle.css'

// Components
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CentralElements from '../components/HomePage/CentralElements'
import Section from '../components/HomePage/Section'

const Home = () => {
  return(
    <div className='PrincipalDivTrack'>
      <NavBar/>
      <CentralElements/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default Home