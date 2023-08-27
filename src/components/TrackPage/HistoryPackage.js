import styles from './historyPackage.module.css'

const HistoryPackage = ()=> {
  return (
    <div className={styles.historyPackageDiv}>
      <div>
        <div className={styles.historyPackageSpanDiv}>
          <span>Histórico do Pacote</span>
        </div>
      </div>
      <div className={styles.historyPackageUlDiv}>
        <h1>Informações</h1>
      </div>
    </div>
  )
}

export default HistoryPackage
