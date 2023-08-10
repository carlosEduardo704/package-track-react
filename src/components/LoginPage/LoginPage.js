import React from "react";
import styles from './loginPage.module.css'
import {Link} from 'react-router-dom'

const LoginPage = ()=> {
  return (
    <>
      <div className={styles.externalDiv}>
        <div className={styles.internalDiv}>
          <h2>Fazer Login</h2>

          <div className={styles.divInput}>
            <label for="email" class="label">E-mail</label>
            <input type="email" class="inputs" id="email"/>
          </div>

          <div className={styles.divInput}>
            <label for="senha" class="label">Senha</label>
            <input type="password" class="inputs" id="senha"/>
          </div>
          <div className={styles.lastInternalDiv}>
            <button className={styles.createAcountButton}>Log-in</button>
            <p>Ainda não possui conta? <Link to="/register" >Registre-se!</Link> </p>
          </div>
        </div>
      </div>
      <div className={styles.spaceFooter}></div>
    </>
  )
}

export default LoginPage