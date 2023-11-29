import styles from './Button.module.css'

function Button({texto, children, value, onClick, estilo}){

    
    return(
        
        <div className="flex justify-center items-center font-roboto1">
            <button className={estilo} value={value} onClick={onClick}>{texto}{children}</button>
        </div>
    )
}
export default Button