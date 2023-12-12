import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './TrackStyle.css'
import NewPackage from '../components/TrackPage/NewPackage'
import PackageCode from '../components/TrackPage/PackageCode'
import HistoryPackage from '../components/TrackPage/HistoryPackage'
import TrakingInformation from '../components/TrackPage/TrackingIformation'

const Track = () => {

  return(
    <>
      <NavBar/>
      <div className='mainDiv'>
        <div>
          <NewPackage/>
          <PackageCode/>
          <HistoryPackage/>
          <TrakingInformation/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Track