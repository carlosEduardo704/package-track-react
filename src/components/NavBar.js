import React from "react";
import { Link } from "react-router-dom";
import styles from './navBar.module.css'

const NavBar = () => {
  return(
    <div className={styles.navBar}>
      <Link className={styles.packageTrack} to='/'>PackageTrack</Link>
      <div className={styles.div}>
        <Link to='/cepSearch'>Busca Cep</Link>
        <Link to='/about'>Sobre</Link>
      </div>
    </div>
  )
}

export default NavBar