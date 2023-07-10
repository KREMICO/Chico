import styles from './FinanEmpresa.module.css'
import financeiras from '../assets/financeiras.png'

function FinanEmpresa() {
    return (
        <div className={styles.finanEmpresa}>
            
            <div id="financ" className={styles.title4}>Precisa de um financiamento?</div>
            <div className={styles.financiamentosArea}>
                <div className={styles.financiamentosText}>
                    Comprar um novo veículo nunca esteve tão fácil. Se você precisa de um financiamento, podemos te ajudar! <br /><br />
                    Taxas muito atrativas, parcelas que cabem no seu bolso, e muito mais. <br /><br />
                    Trabalhamos com diversos meios, como financeiras, bancos e cooperativas, de acordo com a preferência do cliente.<br /><br />
                    Por isso, caso tenha interesse, entre em contato com o pessoal da Chico Automóveis que iremos lhe ajudar da melhor forma possível!

                </div>
                <div className={styles.finanImg}>
                    <img src={financeiras}/>
                </div>
            </div>

            <div id="quems" className={styles.quem}>
                <div className={styles.bgQuem}></div>

                <div className={styles.quemArea}>
                    <div className={styles.title3}>Quem somos?</div>
                    <div className={styles.quemText}>
                     A Chico Automóveis iniciou suas atividades na venda de carros em 2005, onde sempre
                     busca oferecer carros diferenciados em sua qualidade, a fim de que o cliente
                     tenha a satisfação em sua aquisição. <br /> <br />
                        Conta desde 2021 com espaço próprio de showroom para oferecer mais qualidade e comodidade
                     na sua escolha.
                    </div>
                </div>
                



            </div>
        </div>
    )
}



export default FinanEmpresa