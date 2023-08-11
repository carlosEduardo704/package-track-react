import React from "react";
import styles from './registerPage.module.css'
import {Link} from 'react-router-dom'

const RegisterPage = ()=> {
  return (
    <div className={styles.divRegisterPage}>
      <div className={styles.externalDiv}>
        <div className={styles.internalDiv}>
          <h2>Criar Conta</h2>

          <div className={styles.divInput}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
            <label htmlFor="sobreNome">Sobrenome</label>
            <input type="text" id="sobreNome" />
            <label htmlFor="email">E-mail</label>
            <input type="email"id="email"/>
            <label htmlFor="confirmarEmail">Confirmar E-mail</label>
            <input type="email"id="confirmarEmail"/>
            <label for="senha">Senha</label>
            <input type="password" id="senha"/>
          </div>

          <div className={styles.lastInternalDiv}>
            <button className={styles.createAcountButton}>Criar Conta</button>
            <p>Já possui uma conta? <Link to="/register" >Faça login!</Link> </p>
          </div>
        </div>
      </div>
      <div className={styles.spaceFooter}></div>
    </div>
  )
}

export default RegisterPage