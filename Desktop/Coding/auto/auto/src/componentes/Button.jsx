import styles from './Button.module.css'

function Button(props) {
    return (
        <div>
            <a href={props.refe}>
                <div className={styles.wrapper}>
                    {props.content}
                </div>
            </a>
            
        </div>
    )
}





export default Button