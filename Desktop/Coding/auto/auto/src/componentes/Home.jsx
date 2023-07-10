import styles from './Home.module.css'
import chico from '../assets/chico_automoveis.png'
import {WhatsappLogo, InstagramLogo, FacebookLogo, List} from '@phosphor-icons/react'
import ButtonW from './BtnW'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [expand, setExpand] = useState(false)

    function handleMenuExpand() {
        if (expand == false) {
            setExpand(true)
        } else {
            setExpand(false)
        }
    }

    function RenderMenu() {
        if (expand == true) {
            return (
                <ul className={styles.menuOpen}>
                        <a href='#contato'><li>Fale conosco</li></a>
                        <a href='#stock'><li>Veículos</li></a>
                        <a href='#quems'><li>Quem Somos?</li></a>
                    </ul>
            )
        }
    }




    return (
        <div>
            <header className={styles.header}>
                <img src={chico}/>
                
                <div className={styles.menuWrapper}>
                    <ul className={styles.menu}>
                        <a href='#contato'><li>Fale conosco</li></a>
                        <Link to={'/'}><li>Veículos</li></Link>
                        <a href='#quems'><li>Quem Somos?</li></a>
                    </ul>
                    <div className={styles.headerIcons}>
                    <a href="https://api.whatsapp.com/send/?phone=55997143101&text=Chico%20Autom%C3%B3veis%20Giru%C3%A1&type=phone_number&app_absent=0">
                        <WhatsappLogo weight='regular' color='#222' size={25}/>
                    </a>
                    <a href="https://www.instagram.com/chico_automoveis/">
                        <InstagramLogo weight='regular' color='#222' size={25}/>
                    </a>
                    <a href="https://www.facebook.com/ChicoAutomoveisGirua">
                        <FacebookLogo weight='regular' color='#222' size={25}/>
                    </a>
                    </div>
                </div>
                <div className={styles.hiddenMenu} onClick={handleMenuExpand}>
                    <List color="#eee" size={30}/>
                </div>
            </header>
            <RenderMenu />
            

            
            
        </div>
    )
}

export default Home