import React, { useState, useEffect } from 'react';
import styles from './trackingInformation.module.css'

function TrakingInformation() {

  const [trackingData, setTrackingdata] = useState(false);
    
  useEffect(() => {
    
    function trackUrlCode(){

      const urlTrackCode = window.location.href.substring(28);
      
      async function fetchData(){
        try{
          const user = 'carlos_eduardo2761@hotmail.com';
          const token = '83429b38f609e7ee3bc0fb8b51e8ce84be546289fdb2a40207b0f4bc0c0452ad';
          const apiLink = `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${urlTrackCode}`;
          // API
          const response = await fetch(apiLink);
          const data = await response.json();
          sessionStorage.setItem('codigo', data.codigo);
          setTrackingdata(data);
        }catch(error){
          alert('erro!');
        }
      }
      fetchData();
    }
    trackUrlCode();

  }, []);

  
  const chooseImage = (text) => {

    if(text.includes('entregue')){
      return <img className={styles.trackImg} src="https://img.icons8.com/?size=512&id=7773&format=png" alt="Entregue" />
    }else if(text.includes('saiu para') || text.includes('não atendido')){
      return <img className={styles.trackImg} src="https://img.icons8.com/?size=512&id=8372&format=png" alt="Saiu para entrega" />
    }else if(text.includes('não localizado')){
      return <img className={styles.trackImg} src="https://img.icons8.com/?size=512&id=2908&format=png" alt="Não localizado" />
    }else if(text.includes('aguardando')){
      return <img className={styles.trackImg} src="https://img.icons8.com/?size=512&id=8708&format=png" alt="Aguardando retirada" />
    }else{
      return <img className={styles.trackImg} src="https://img.icons8.com/?size=512&id=7776&format=png" alt="Em transito" />
    }
  }

  return (
    <div>
      <h3>Detalhes de Rastreamento:</h3>
      <ul className={styles.ulDetalhesRastreamento}>
        {trackingData && trackingData.eventos.map((event, index) => {return(
          <li key={index}>
            <div className={styles.divLi}>

              <div className={styles.divDataHora}>
                <span>
                  {Object.values(event.data)}
                </span>
                <span>
                  {Object.values(event.hora)}
                </span>
              </div>

              <div className={styles.divImagem}>
                  {chooseImage(event.status.toString())}
              </div>

              <div className={styles.divStatusLocal}>
                <strong>{Object.values(event.status)}</strong>
                <p>{Object.values(event.local)}</p>
              </div>

            </div>
            
          </li>
        )})
        }
      </ul>
    </div>
  );
}

export default TrakingInformation;
