import React from "react";
import { Link } from "react-router-dom";
import styles from './navBar.module.css'

const NavBar = () => {
  return(
    <div className={styles.navBar}>
      <Link className={styles.title} to='/'>PackageTrack</Link>
      <Link className={styles.textBucaCep} to='/cepSearch'>Busca Cep</Link>
    </div>
  )
}

export default NavBar