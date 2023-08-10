import React from 'react'
import styles from './centralElements.module.css'

const CentralElements = ()=> {
  return (
    <div className={styles.externalDiv}>
      <div className={styles.internalDiv}>
        <p className={styles.texto}>Rastreamento de Encomendas</p>
        <div className={styles.divCodeInputButton}>
          <input className={styles.trackCodeInput} type="text" name="trackCodeInput" placeholder='Digite o código de rastreio' />
          <button className={styles.trackCodeButton}>Pesquisar</button>
        </div>

      </div>

    </div>
  )
}

export default CentralElements