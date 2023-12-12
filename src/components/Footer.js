import React from "react";
import { Link } from "react-router-dom";
import styles from './footer.module.css'

const Footer = ()=> {
  return(
    <div className={styles.divFooter}>
      <h4>Criado por: Carlos Eduardo</h4>
      <footer className={styles.footerImgs}>
        <Link to="https://facebook.com/cadunokia" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="facebook icon"/></Link>
        <Link to="https://linkedin.com/in/carlos-eduardo-704" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="linkedin icon"/></Link>
        <Link to="https://github.com/carlosEduardo704" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="github icon"/></Link>
      </footer>
    </div>
  )
}

export default Footer