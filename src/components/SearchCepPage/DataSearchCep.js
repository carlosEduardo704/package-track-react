import React, { useCallback, useContext } from "react";
import styles from './dataSearchCep.module.css'
import BuscaCepDataContext from "./buscaCepContext";

const DataSearchCep = () => {

   const {data, updateData} = useContext(BuscaCepDataContext);

   return(
    <div className={styles.mainDivCep}>
      <div className={styles.ulDiv}>
         <ul>
            <li>
               <strong>CEP: </strong>{data.cep}
            </li>
            <li>
               <strong>UF: </strong>{data.uf}
            </li>
            <li>
               <strong>Logradouro: </strong>{data.logradouro}
            </li>
            <li>
               <strong>Cidade: </strong>{data.localidade}
            </li>
            <li>
               <strong>Bairro: </strong> {data.bairro}
            </li>
         </ul>
      </div>
      <div>
         <img className={styles.cepImage} src="https://img.icons8.com/?size=256&id=39139&format=png" alt="zipCase" />
      </div>
    </div>
   )
}

export default DataSearchCep;