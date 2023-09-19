import React, { useState, useEffect } from "react";
import styles from './newPackage.module.css'

const NewPackage = () => {
  
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
          const data = await response.json();
          sessionStorage.clear();
          sessionStorage.setItem('trackingData', data.eventos);
          setCanIFetch(false);
        }catch(error){
          alert('Código inválido, tente novamente!');
          setCanIFetch(false);
        }
      }
      fetchData();
    }
    

  })

  return (
    <div>
      <h1>Novo Pacote</h1>
      <div className={styles.divNewPackage}>
      <input
      type="text"
      onChange={(e) => setTrackingCode(e.target.value)} 
      placeholder="AB123456789BR"/>
      <button
      onClick={buttonClick}
      >Pesquisar</button>
      </div>
    </div>
    
  )
}

export default NewPackage