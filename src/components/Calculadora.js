import styles from './Calculadora.module.css'
import Button from './Button'
import {FiDelete} from 'react-icons/fi'
import { useState } from 'react'


function Calculadora(){

    const [valor, setValor] = useState([])
    const [resultado, setResultado] = useState(0)
    const [usarVirgula, setUsarVirgula] = useState(false)
    const [usarAdicao, setUsarAdicao] = useState(false)
    const [usarSubtracao, setUsarSubtracao] = useState(false)
    const [usarMultiplicacao, setUsarMultiplicacao] = useState(false)
    const [usarDivisao, setUsarDivisao] = useState(false)
  
    

    
    function adicionarNumero(e){
        
        
        const numero = e.target.value;
        
        setValor(valor + numero)
        setResultado(valor+numero)
        setUsarAdicao(false)
        setUsarSubtracao(false)
        setUsarMultiplicacao(false)
        setUsarDivisao(false)
        setUsarVirgula(false)
    }
    function limparNumeros(){
        setValor('')
    }
    function deletarNumero(){
        const novaExpressao = [...valor]
        setValor(novaExpressao.slice(0, -1));
        setUsarAdicao(false)
    }

    function resultadoFinal(){
       
        {
        const res = eval(valor)
        setResultado(res)
    }
         
    }
    function adicionarVirgula(){
        if(!usarVirgula){
            setValor(valor + '.')
            setUsarVirgula(true)
        }

    }
    function adicionarAdicao(){
        if(!usarAdicao){
            setValor(valor + '+')
            setUsarAdicao(true)
            setUsarSubtracao(true)
        }
    }
    function adicionarSubtracao(){
        if(!usarSubtracao){
            setValor(valor + '-')
            setUsarSubtracao(true)
            setUsarAdicao(true)
        }
    }
    function adicionarMultiplicacao(){
        if(!usarMultiplicacao){
            setValor(valor + '*')
            setUsarSubtracao(true)
            setUsarAdicao(true)
            setUsarMultiplicacao(true)
        }
    }
    function adicionarDivisao(){
        if(!usarDivisao){
            setValor(valor + '/')
            setUsarSubtracao(true)
            setUsarAdicao(true)
            setUsarMultiplicacao(true)
            setUsarDivisao(true)
        }
    }

    function adicionarPorcentagem(e){
        const calcular = e.target.value;
        const res = eval(valor+calcular)
        setValor(valor+"%")
        setResultado(res)
        
        
        
        
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
                    
                    <p className={styles.valorResultado}>{`=${resultado}`}</p>
                    )
            }
            </div>

            </div>
            <div className={styles.teclado}>
                <Button texto="C" onClick={()=>limparNumeros()}/>
                <Button onClick={deletarNumero}><p className={styles.icone}><FiDelete/></p></Button>
                <Button texto="%" value={'/100'} onClick={adicionarPorcentagem}/>
                <Button texto="&divide;" value="/" onClick={adicionarDivisao}/>
                <Button estilo={styles.buttonNumeros} texto="7" value={7} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="8" value={8} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="9" value={9} onClick={adicionarNumero}/>
                <Button texto="&#215;" value="*" onClick={adicionarMultiplicacao}/>
                <Button estilo={styles.buttonNumeros} texto="4" value={4} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="5" value={5} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="6" value={6} onClick={adicionarNumero}/>
                <Button texto="-" value="-" onClick={adicionarSubtracao}/>
                <Button estilo={styles.buttonNumeros} texto="1" value={1} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="2" value={2} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="3" value={3} onClick={adicionarNumero}/>
                <Button texto="+" value="+" onClick={adicionarAdicao}/>
                <Button texto="tec"/>
                <Button estilo={styles.buttonNumeros} texto="0" value={0} onClick={adicionarNumero}/>
                <Button estilo={styles.buttonNumeros} texto="." value={'.'} onClick={adicionarVirgula}/>
                <Button estilo={styles.buttonIgualdade}texto="=" onClick={resultadoFinal}/>
                

            </div>

        </div>
    )
}
export default Calculadora