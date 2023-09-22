import React from "react";
import styles from './packageCode.module.css'

const PackageCode = ()=> {
  return (
    <div className={styles.divPackageCode}>
      <h2>{sessionStorage.getItem('trackingCode')}</h2>
    </div>
  )
}

export default PackageCode