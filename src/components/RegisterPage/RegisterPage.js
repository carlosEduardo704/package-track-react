import React from "react";
import styles from './registerPage.module.css'
import {Link} from 'react-router-dom'

const RegisterPage = ()=> {
  return (
    <>
      <div className={styles.externalDiv}>
        <div className={styles.internalDiv}>
          <h2>Criar Conta</h2>

          <div className={styles.divInput}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
            <label htmlFor="sobreNome">Sobrenome</label>
            <input type="text" id="sobreNome" />
            <label htmlfor="email">E-mail</label>
            <input type="email"id="email"/>
            <label htmlfor="confirmarEmail">Confirmar E-mail</label>
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
    </>
  )
}

export default RegisterPage