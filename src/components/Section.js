import React from "react";
import styles from './section.module.css'

const Section = ()=> {
  return (
    <>
      <section>
        <p className={styles.firstP}>Como rastrear objetos, encomendas ou pacotes com o Packagetrack?</p>
        <div className={styles.externalDivTrackTeach}>
          <div className={styles.internalDivTrackTeach}>
            <h3>
              Cadastre os códigos
              <br />
              dos objetos
            </h3>
            <i>
              <img className={styles.barCodeIcon} src="https://cdn-icons-png.flaticon.com/512/25/25350.png" alt="barCodeIcon" />
            </i>
            <p className={styles.secondP}>
              Quer rastrear sua encomenda?
              <br />
              Cadastre o código de rastreamento e organizaremos tudo para você!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section