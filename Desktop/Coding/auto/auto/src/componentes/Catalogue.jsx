import styles from './Catalogue.module.css'
import Button from './Button'
import { Link } from 'react-router-dom'

function Catalogue(props) {

    function Sold() {
        if (props.sold) {
            return (
                <div className={styles.soldBar}>VENDIDO</div>
            )
        }
    }
    
    function DisabledButton() {
        if (props.sold) {
            return(<div className={styles.underbarDisabled}>VER MAIS</div>)
        } else {
            return (<Link to={`/cars/${props.id}`}><div className={styles.underbar}>VER MAIS</div></Link>)
        }
    }


    return (
        <div className={styles.centerdiv}>
            <div className={styles.carrousel}>
                <Sold />
                <img className={styles.frstcar} style={props.sold ? {opacity:0.7} : {opacity:1}} src={props.imgs[0]}/> 

                <DisabledButton />
                
                
                
            </div>
            

            <div className={styles.carinfo}>
                <div className={styles.nameyear}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.year}>{props.year}</div>
                </div>
                
                <div className={styles.price}>{props.price}</div>
                <div className={styles.desc}>{props.desc}</div>
                
                <Button content="Contate-nos" refe="#contato"/>
                
            </div>
        </div>
    )
}

export default Catalogue