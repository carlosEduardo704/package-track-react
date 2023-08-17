import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './TrackStyle.css'
import NewPackage from '../components/TrackPage/NewPackage'
import PackageCode from '../components/TrackPage/PackageCode'
import HistoryPackage from '../components/TrackPage/HistoryPackage'

const Track = () => {
  return(
    <div >
      <div className="trackExternalDivNavBar">
        <NavBar/>
      </div>
      <div className="trackInternalDiv">
        <NewPackage/>
        <PackageCode/>
        <HistoryPackage/>
      </div>
      <div className="trackExternalDivFooter">
        <Footer/>
      </div>
    </div>
  )
}

export default Track