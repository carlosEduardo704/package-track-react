import React, { useContext, useEffect, useState } from "react";
import styles from './centralElements.module.css'
import BuscaCepDataContext from "./buscaCepContext";

const CentralElementsSearchCep = () => {

  const [buscaCepCode, setBuscaCepCode] = useState('')

  const [canIFetch, setCanIFetch] = useState(false);

  const {data, updateData} = useContext(BuscaCepDataContext);

  const buttonClick = () => {
    setCanIFetch(true)
  }

  useEffect(()=>{
    if(canIFetch){
      async function fetchData(){
        const apiLink = `https://viacep.com.br/ws/${buscaCepCode}/json/`
        try{
          const response = await fetch(apiLink);
          const dataRequest = await response.json()
          updateData(dataRequest)
          console.log(dataRequest)
          setCanIFetch(false)
        }
        catch(error){
          alert('Cep inválido!')
          setCanIFetch(false)
        }
      }
      fetchData();
    };
  })

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
            <button className={styles.searchButton} onClick={buttonClick}>Pesquisar</button>
        </div>

      </div>

    </div>
    </>
  )
}

export default CentralElementsSearchCep;