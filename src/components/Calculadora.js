import Button from './Button'
import {FiDelete} from 'react-icons/fi'
import { useState } from 'react'


function Calculadora(){

    const [valor, setValor] = useState('')
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
        const novoValor = valor.slice(0,-1);
        setValor(novoValor)
    }

    function resultadoFinal(){
       
        
        const res = eval(valor)
        setResultado(res)
    
         
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
        <div className="border-4 border-solid border-black p-1 rounded-px18 bg-black mc:w-80 md:w-72">
            <div className="flex justify-end items-end pb-7 pr-2 mt-10 mr-3 ml-3 border-b-px1 border-cinzaVisor mc:h-64  md:h-56 mb-3">
                {valor === 0?(null
                    

                ):
                <p className="text-white text-4xl font-semibold fixed mb-6">{valor}</p>

                
            }
                
                
                <div className="flex flex-col justify-center items-end w-52 h-40">
               {valor == 0?(
                <p className="text-white text-px40 font-semibold h-screen mt-36">0</p>
               
                ):(
                    
                    <p className="text-gray-500 mt-40">{`=${resultado}`}</p>
                    )
            }
            </div>

            </div>
            <div className="grid grid-cols-4 justify-items-center font-roboto1">
                <Button estilo="text-laranjaNumeros p-px10 rounded-full text-2xl mb-2 h-12 w-12 cursor-pointer border-none flex justify-center items-center" texto="C" onClick={()=>limparNumeros()}/>
                <Button estilo="text-laranjaNumeros p-px10 rounded-full text-2xl mb-2 h-12 w-12 cursor-pointer flex justify-center items-center" onClick={deletarNumero}><p className=""><FiDelete/></p></Button>
                <Button estilo="text-laranjaNumeros rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="%" value={'/100'} onClick={adicionarPorcentagem}/>
                <Button estilo="text-laranjaNumeros rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="&divide;" value="/" onClick={adicionarDivisao}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="7" value={7} onClick={adicionarNumero}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="8" value={8} onClick={adicionarNumero}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="9" value={9} onClick={adicionarNumero}/>
                <Button estilo="text-laranjaNumeros rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="&#215;" value="*" onClick={adicionarMultiplicacao}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="4" value={4} onClick={adicionarNumero}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="5" value={5} onClick={adicionarNumero}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="6" value={6} onClick={adicionarNumero}/>
                <Button estilo="text-laranjaNumeros rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="-" value="-" onClick={adicionarSubtracao}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12  mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="1" value={1} onClick={adicionarNumero}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="2" value={2} onClick={adicionarNumero}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="3" value={3} onClick={adicionarNumero}/>
                <Button estilo="text-laranjaNumeros rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="+" value="+" onClick={adicionarAdicao}/>
                <Button estilo=" text-laranjaNumeros rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center"texto="tec"/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="0" value={0} onClick={adicionarNumero}/>
                <Button estilo="text-white rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer p-px10 flex justify-center items-center" texto="." value={'.'} onClick={adicionarVirgula}/>
                <Button estilo="rounded-full rounded-full text-2xl h-12 w-12 mb-2 cursor-pointer bg-laranjaNumeros text-white p-px10 flex justify-center items-center"texto="=" onClick={resultadoFinal}/>
                

            </div>

        </div>
    )
}
export default Calculadora