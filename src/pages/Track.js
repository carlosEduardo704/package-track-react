import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './TrackStyle.css'
import NewPackage from '../components/TrackPage/NewPackage'

const Track = () => {
  return(
    <div className="trackExternalDiv">
      <div className="trackInternalDiv">
        <NavBar/>
        <NewPackage/>
        <Footer/>
      </div>
    </div>
  )
}

export default Track