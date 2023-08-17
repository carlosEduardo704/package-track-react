import React from "react";
import styles from './newPackage.module.css'
const NewPackage = ()=> {
  return (
    <div>
      <h1>Novo Pacote</h1>
      <div className={styles.divNewPackage}>
      <input type="text" placeholder="AB123456789BR"/>
      <button>Pesquisar</button>
      </div>
    </div>
    
  )
}

export default NewPackage