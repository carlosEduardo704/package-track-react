import React from "react";
import styles from './sectionElements.module.css'

const SectionElements = () =>{
  

  return (
    <div className={styles.mainDiv}>
      <section className={styles.sectionSectionElements}>

        <h2 className={styles.h2sections}>Tipos de endereços e logradouros no Brasil</h2>

        <ul className={styles.ulSectionElements}>

          <li className={styles.liSectionElements}>
            Alameda: alameda pode ser considerada como uma rua arborizada. Devido à essa arborização, há passeios com sombras e praças com lugares fresco para a população.
          </li>
          <li className={styles.liSectionElements}>
            Avenida: avenida pode ser interpretada como uma rua importante da cidade em questão. Na maioria das grandes cidades, avenidas possuem bastante movimento de pessoas e automóveis. Há também concentração de endereços comerciais. E por último, muitas avenidas fazem ligações importantes entre bairros e zonas das cidades.
          </li>
          <li className={styles.liSectionElements}>
            Beco: beco é uma pequena rua, com largura estreita. Geralmente o beco é uma rua sem saída e com iluminação bem fraca.
          </li>
          <li className={styles.liSectionElements}>
            Estrada: estradas são vias que geralmente ligam os municípios dentro do mesmo estado ou entre estados.
          </li>
          <li className={styles.liSectionElements}>
            Praça: praça pode ser considerada como um espaço térreo cercada por 3 ou mais ruas. Geralmente há igrejas, comércios, sorveterias, pista de skate, jardins, árvores, bancos para descanso, quadras de esporte, ciclovia, aparelhos de exercícios e vários outras instalações utilizadas pela população.
          </li>
          <li className={styles.liSectionElements}>
            Quadra: o termo quadra ou a abreviação QD. Uma quadra é geralmente uma área delimitada por 4 ruas, avenidas ou praças. Muitas vezes utilizadas também para informar a distânciadistancia de uma rua a outra ex: em duas quadras há um hospital.
          </li>
          <li className={styles.liSectionElements}>
            Rodovia: rodovia é considerada uma estrada maior e necessariamente é pavimentada para facilitar o tráfego de automóveis, motocicletas e caminhões a alta velocidade. No Brasil, a maioria dos produtos são transportados por caminhões que trafegam nas rodovias.
          </li>
          <li className={styles.liSectionElements}>
            Travessa: travessa geralmente é a ligação de duas ruas maiores. A travessa na maioria dos casos possui apenas algumas dezenas de metros.
          </li>
          <li className={styles.liSectionElements}>
            Vila: vila pode ser considerada como um vilarejo mais afastado que ainda não foi considerado um município.
          </li>

        </ul>

        <h2 className={styles.h2sections}>Lista de zonas postais no Brasil</h2>

        <ul className={styles.ulSectionElements}>

          <li className={styles.liSectionElements}>
          Primeira zona postal: região da grande São Paulo - CEP de 01000-xxxa até 09999-xxx.
          </li>
          <li className={styles.liSectionElements}>
          Segunda Zona Postal: interior e litoral do estado de São Paulo, 11000-xxx até 19999-xxx.
          </li>
          <li className={styles.liSectionElements}>
          Terceira Zona Postal: Rio de Janeiro, de CEP 2000-xxx até 2899-xxx e Espirito Santo, 29000-xxx até 2999-xxx.
          </li>
          <li className={styles.liSectionElements}>
          Quarta zona postal é o estado de Minas Gerais, 30000-xxx a 39990-xxx.
          </li>
          <li className={styles.liSectionElements}>
          Quinta zona postal: região dos estados da Bahia e Sergipe. A Bahia tem o CEP de 40000-xxx até 48999-xxx e o Sergipe de 49000-xxx a 4999-xxx.
          </li>
          <li className={styles.liSectionElements}>
          Sexta Zona Postal: composta por 4 estados que são; Pernambuco, Alagoas, Paraíba e Rio Grande Norte. Por Pernambuco, que tem o CEP começado por 50000-xxx a 56999-xxx, por Alagoas, 57000-xxx até 57999-xxx, por Paraíba, 58000-xxx até 58999-xxx e por Rio Grande do Norte, 59000-xxx até 59999-xxx.
          </li>
          <li className={styles.liSectionElements}>
          Sétima Zona Postal: composta por 8 estados que são; Ceará, Piauí, Maranhão, Pará, Amapá, Amazonas, Acre e Roraima. O Ceará, com CEP de 60000-xxx até 63990-xxx, o Piauí, 64000-xxx até 64990-xxx, o Maranhão, 65000-xxx até 65990-xxx, o Pará, 66000-xxx até 68890-xxx, o Amapá, 689000-xxx a 68999-xxx, o Amazonas, com CEP de 69000-xxx a 69299-xxx, pelo Acre, 69400-xxx a 69899-xxx e Roraima, 69300-xxx a 69399-xxx.
          </li>

        </ul>
      </section>

    </div>
  )
}

export default SectionElements;