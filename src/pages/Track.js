import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './TrackStyle.css'

const Track = () => {
  return(
    <div className="trackExternalDiv">
      <div className="trackInternalDiv">
        <NavBar/>
        <Footer/>
      </div>
    </div>
  )
}

export default Track