import React from "react";
import styles from './packageCode.module.css'

const PackageCode = ()=> {

  const urlTrackCode = window.location.href.substring(window.location.href.length - 13);


  return (
    <div className={styles.divPackageCode}>
      <h2>{urlTrackCode}</h2>
    </div>
  )
}

export default PackageCode