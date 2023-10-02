import styles from './Calculadora.module.css'
import Button from './Button'
import {FiDelete} from 'react-icons/fi'
import { useState } from 'react'


function Calculadora(){

    const [valor, setValor] = useState('')
    const [resultado, setResultado] = useState(0)
    
    function adicionarNumero(e){
        setValor('')
        const numero = e.target.value
        setValor(valor + numero)
        setResultado(valor)
    }
    function limparNumeros(){
        setValor('')
    }
   
    
   
    return(
        <div className={styles.container}>
            <div className={styles.visor}>
                {valor === 0?(null
                    

                ):
                <p className={styles.valorDigitado}>{valor}</p>

                
            }
                
                
                <div className={styles.divResultados}>
               {valor == 0?(
                <p className={styles.valor2}>0</p>
               
                ):(
                    <p className={styles.valorResultado}>{`=${valor}`}</p>
                )
            }
            </div>

            </div>
            <div className={styles.teclado}>
                <Button texto="C" onClick={()=>limparNumeros()}/>
                <Button><p className={styles.icone}><FiDelete/></p></Button>
                <Button texto="%"/>
                <Button texto="&divide;"/>
                <Button estilo={styles.buttonNumeros} texto="7" value={7} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="8" value={8} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="9" value={9} onClick={adicionarNumero}/>
                <Button texto="&#215;"/>
                <Button estilo={styles.buttonNumeros} texto="4" value={4} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="5" value={5} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="6" value={6} onClick={adicionarNumero}/>
                <Button texto="-"/>
                <Button estilo={styles.buttonNumeros} texto="1" value={1} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="2" value={2} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="3" value={3} onClick={adicionarNumero}/>
                <Button texto="+" value="+"/>
                <Button texto="tec"/>
                <Button estilo={styles.buttonNumeros} texto="0" value={0} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="," value={','} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonIgualdade}texto="="/>
                

            </div>

        </div>
    )
}
export default Calculadora