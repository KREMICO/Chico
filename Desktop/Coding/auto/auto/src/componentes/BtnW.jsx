import styles from './BtnW.module.css'

function ButtonW(props) {
    return (
        <div>
            <a className={props.variant == 'white' ? styles.wrapperaW : styles.wrapperaB} href={props.refe}>
                <div className={props.variant == 'white' ? styles.wrapperW : styles.wrapperB}>
                    {props.content}
                    <div>→</div>
                </div>
            </a>
            
        </div>
    )
}





export default ButtonW