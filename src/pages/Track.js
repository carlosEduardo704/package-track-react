import React, {useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './TrackStyle.css'
import NewPackage from '../components/TrackPage/NewPackage'
import PackageCode from '../components/TrackPage/PackageCode'
import HistoryPackage from '../components/TrackPage/HistoryPackage'
import TrakingInformation from '../components/TrackPage/TrackingIformation'

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
        <TrakingInformation/>
      </div>
      <div className="trackExternalDivFooter">
        <Footer/>
      </div>
    </div>
  )
}

export default Track