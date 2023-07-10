import styles from './CarDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import catalogue from '../info/Carroslist'
import { useState } from 'react'
import {CaretRight, CaretLeft} from '@phosphor-icons/react'
import Button from '../componentes/Button'
import {ArrowRight} from '@phosphor-icons/react'
import Contato from '../componentes/Contato'
import EmpresaFinan from '../componentes/EmpresaFinan'




export function CarDetails(props) {
    const {carIdString} = useParams()
    const carId = Number(carIdString)
    const carInfo = catalogue.find(list => list.id === carId)


    
    {if (carInfo != undefined) {


        const [index, setIndex] = useState(0)
    const imgLength = carInfo.imgs.length

    function handleLeft() {
        if (index > 0) {
            setIndex(index - 1) 
        } else {
            setIndex(imgLength - 1)
        }
        
    }

    function handleRight() {
        if (index < imgLength - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
             
    }

    function changePage(ind) {
        setIndex(ind)
    }

    return (
        <div>
            

            <span className={styles.headertitle}>Home  {'>'}  Veículos {'>'} {carInfo.name}</span>
            <div className={styles.carInfoWrapper}>
                <div className={styles.carinfobox}>
                    <div className={styles.name}>{carInfo.name}</div>     
                    <div className={styles.desc}>{carInfo.desc}</div>
                    <div className={styles.arrowyear}>
                    <ArrowRight color='#333' size={25}/>
                    <div className={styles.year}>Ano: {carInfo.year}</div>
                    </div>                  
                    <div className={styles.price}>Valor: {carInfo.price}</div>
                    <Button refe="#contato" content="Contate-nos"/>
                
                </div>

                <div className={styles.carrousel}>
                
                    <img className={styles.carImg} src={carInfo.imgs[index]}/>
                
                    <div className={styles.arrows}>
                        <div className={styles.leftDiv} onClick={handleLeft}><CaretLeft size={50} weight='light' color='#222'/></div>
                        <div className={styles.sliderPage}>
                            {carInfo.imgs.map((img, ind) => {
                                if (ind === index) {
                                    return <div className={styles.pageActive}></div>
                                } else {
                                    return <div className={styles.page} onClick={() => changePage(ind)}></div>
                                }
                            })}
                        </div>
                        <div className={styles.rightDiv} onClick={handleRight}><CaretRight size={50} weight='light' color="#222"/></div>
                    </div>
                </div>

                <div className={styles.nameMobile}>{carInfo.name}</div>

                
            </div>



            <div className={styles.title2} id='contato'>Contato</div>
            <Contato />
            <EmpresaFinan />


        </div>
        
    )
    } else {
        return (
            <div className={styles.errorwrapper}>
            <div className={styles.nonexistant}>A página que você tentou acessar não existe!</div>
            <Link to={'/'}><Button content="Voltar"/></Link>
            </div>
        )
    }
}
}