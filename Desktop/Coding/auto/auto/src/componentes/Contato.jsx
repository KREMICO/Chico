import styles from './Contato.module.css'
import {WhatsappLogo, InstagramLogo, FacebookLogo} from '@phosphor-icons/react'


function Contato() {
    return (
        <div className={styles.contactFather}>
        <div className={styles.socials}>
            <a href='https://www.facebook.com/ChicoAutomoveisGirua' className={styles.icon}>
            <div>
                <FacebookLogo  color='#eee' size={30}/>
            </div>
            FACEBOOK
            </a>
            <a href='https://www.instagram.com/chico_automoveis/' className={styles.icon}>
            <div>
                <InstagramLogo  color='#eee' size={30}/>
            </div>
            INSTAGRAM
            </a>
            <a href='https://api.whatsapp.com/send/?phone=55997143101&text=Chico%20Autom%C3%B3veis%20Giru%C3%A1&type=phone_number&app_absent=0' className={styles.icon}>
            <div>
                <WhatsappLogo  color='#eee' size={30}/>
            </div>
            WHATSAPP
            </a>
            
            
        </div>
        <div>
            <a className={styles.endereco}>Av Athaídes Pacheco Martins, 1670</a>
            <a className={styles.endereco}> Giruá, RS</a>
        </div>
        </div>
    )
}


export default Contato