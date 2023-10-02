import styles from './Button.module.css'

function Button({texto, children, value, onClick, estilo}){

    
    return(
        
        <div className={styles.buttonContainer}>
            <button className={estilo} value={value} onClick={onClick}>{texto}{children}</button>
        </div>
    )
}
export default Button