import React, { useState, useEffect } from 'react'
import styles from './centralElements.module.css'

const CentralElements = ()=> {

  const [canIFetch, setCanIFetch] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  
  function buttonClick(){
    setCanIFetch(true);
  }
  
  useEffect(() => {
    if(canIFetch){
      async function fetchData(){
        try{
          const user = 'carlos_eduardo2761@hotmail.com';
          const token = '83429b38f609e7ee3bc0fb8b51e8ce84be546289fdb2a40207b0f4bc0c0452ad';
          const apiLink = `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${trackingCode}`;
          // API
          const response = await fetch(apiLink);
          setCanIFetch(false);
          window.location.href = `/track/${trackingCode}`;
        }catch(error){
          alert('Código inválido, tente novamente!');
          setCanIFetch(false);
          window.location.reload()
        }
      }
      fetchData();
    }
    

  })

  return (
    <div className={styles.externalDiv}>
      <div className={styles.internalDiv}>
        <p className={styles.texto}>Rastreamento de Encomendas</p>
        <div className={styles.divCodeInputButton}>
        <input
            className={styles.trackCodeInput}
            type="text"
            name="trackCodeInput"
            placeholder="Digite o código de rastreio"
            onChange={(e) => setTrackingCode(e.target.value)}/>
            <button className={styles.trackCodeButton} onClick={buttonClick}>Pesquisar</button>
        </div>

      </div>

    </div>
  )
}

export default CentralElements