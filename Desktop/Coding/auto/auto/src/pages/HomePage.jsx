import Home from '../componentes/Home'
import '../global.css'
import Catalogue from '../componentes/Catalogue'
import styles from './HomePage.module.css'
import Contato from '../componentes/Contato'
import catalogue from '../info/Carroslist'
import FinanEmpresa from '../componentes/FinanEmpresa'




export function HomePage() {

  return (
    <div>
      <div className={styles.back}></div>


      <div className={styles.title} id="stock">Estoque</div>
      <div className={styles.flexin}>

          {catalogue.map(car => {
            return (
            <Catalogue
              name={car.name}
              desc={car.desc}
              price={car.price}
              year={car.year}
              imgs={car.imgs}
              sold={car.sold}
              id={car.id}
              />)
          })}

      </div>

      <div className={styles.title2} id='contato'>Contato</div>
      <Contato />
      
      <FinanEmpresa />


      <div className={styles.footer}>Chico Automóveis Giruá</div>
    </div>
  )
}

