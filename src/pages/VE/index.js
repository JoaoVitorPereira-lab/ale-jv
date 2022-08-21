import { useState } from 'react'
import './index.scss'

export default function VariaveldeEstado(){
    
    const [mostrar, setMostrar] = useState(false);
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    function exibir(){
        setMostrar(true);
    }

    function calcularIMC(peso, altura){
        const resposta = Number(peso/(altura*altura)).toFixed(2);
        return resposta;
    }

    return(
        <div className='page-ve'>
            <div className='div-ve'>
                <div className='div-sobremim'>
                    <h3> Sobre mim </h3>

                    <div className='div-name-date'>
                        <input  className='nome' 
                                value={nome}
                                onChange={e => setNome(e.target.value)} 
                                type="text" 
                                placeholder='Informe seu nome'
                        />
                        <input  className='data'
                                value={nascimento}
                                onChange={e => setNascimento(e.target.value)}
                                type="date"/>
                    </div>

                    <div className='div-infos'>
                        <input  className='medida'
                                value={altura}
                                onChange={e => setAltura(e.target.value)}
                                type="text" 
                                placeholder='Altura'
                        />
                        <input  className='medida peso' 
                                value={peso}
                                onChange={e => setPeso(e.target.value)}
                                type="text" 
                                placeholder='Peso'
                        />
                        <input className='input-checkbox' type="checkbox"/> <span className='span-check'> Trabalha Atualmente </span>
                        <button onClick={exibir}> Visualizar </button>
                    </div>
                </div>
        
                {mostrar === true &&
                    <div className='div-ficha'>
                        <h2> Ficha </h2>

                        <section className='sec-nome'>
                            <text> Nome: </text>
                            <span> {nome} </span>
                        </section>

                        <section className='sec-nascimento'>
                            <text> Nascimento: </text>
                            <span> {nascimento} (32 Anos) </span>
                        </section>

                        <section className='diferentona'>
                            <div className='not-div'>
                                <text> Altura: </text>
                                <span className='span-diferentona alt'> {altura} </span>
                            </div>

                            <div>
                                <text> Peso: </text>
                                <span className='span-diferentona'> {peso} </span>
                            </div>

                            <div>
                                <text> IMC: </text>
                                <span className='span-diferentona'> {calcularIMC(peso, altura)} </span>
                            </div>
                        </section>

                        <section className='sec-trabalha'>
                            <text> Trabalha: </text>
                            <span> Sim </span>
                        </section>  
                    </div>
                }

            </div>
        </div>
    )
}