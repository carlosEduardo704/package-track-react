import React, {useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './TrackStyle.css'
import NewPackage from '../components/TrackPage/NewPackage'
import PackageCode from '../components/TrackPage/PackageCode'
import HistoryPackage from '../components/TrackPage/HistoryPackage'
import TrakingInformation from '../components/TrackPage/TrackingIformation'

const Track = () => {

  const urlTrackCode = window.location.href.substring(28);
  console.log(urlTrackCode)

  useEffect(() => {
      async function fetchData(){
        try{
          const user = 'carlos_eduardo2761@hotmail.com';
          const token = '83429b38f609e7ee3bc0fb8b51e8ce84be546289fdb2a40207b0f4bc0c0452ad';
          const apiLink = `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${urlTrackCode}`;
          // API
          const response = await fetch(apiLink);
          const data = await response.json();
        }catch(error){
          alert('Código inválido, tente novamente!');
        }
      }
      fetchData();
    

  })



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