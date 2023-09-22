import React from 'react';
import styles from './trackingInformation.module.css'

function TrakingInformation() {

  const trackingData = JSON.parse(sessionStorage.getItem('trackingData'));
  
  const chooseImage = (text) => {

    if(text.includes('entregue')){
      return <img className={styles.trackImg} src="https://img.icons8.com/?size=512&id=7773&format=png" alt="Entregue" />
    }else if(text.includes('saiu para')){
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
        {trackingData.map((event) => {return(
          <li>
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
