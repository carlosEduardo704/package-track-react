import React, { useState } from "react";
import styles from './centralElements.module.css'


const CentralElementsSearchCep = () => {

  const [buscaCepCode, setBuscaCepCode] = useState('')

  return (
    <>
      <div className={styles.externalDiv}>
      <div className={styles.internalDiv}>
        <h1 className={styles.h1BuscaCep}>Busca Cep</h1>
        <div className={styles.divCodeInputButton}>
        <input
            className={styles.searchInput}
            type="text"
            name="BuscaCepInput"
            placeholder="Digite seu CEP"
            onChange={(e) => setBuscaCepCode(e.target.value)}/>
            <button className={styles.searchButton}>Pesquisar</button>
        </div>

      </div>

    </div>
    </>
  )
}

export default CentralElementsSearchCep;