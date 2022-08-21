import { useState } from 'react'
import './index.scss'

export default function Planos(){

    const [mostrar, setMostrar] = useState(false)
    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [cor, setCor] = useState('');

    function exibir(){
        setMostrar(true)
    }

    return(
        <section className="sec-planos">
            <h1> Meus planos atuais </h1>

            <div className="div-inputs1">
                <input  id="input-plano"
                        value={plano}
                        onChange={e => setPlano(e.target.value)}
                        type="text" 
                        placeholder='Digite aqui o plano'/>

                <input  id="input-cor"
                        value={cor}
                        onChange={e => setCor(e.target.value)}
                        type="text"
                        placeholder='Código da cor'/>
            </div>

            <div className='div-inputs2'>
                <input  id='input-situacao' 
                        value={situacao}
                        onChange={e => setSituacao(e.target.value)}
                        type="text" 
                        placeholder='Digite aqui a situação'/>
                <button className='button-adicionar' onClick={exibir}> Adicionar </button>
            </div>

            {mostrar === true &&
                <aside>
                    <div className='div-center'>
                        <div className='button-edit-remover'>
                            <button className='edit-planos'>
                                <img src='../images/editar-planos.png'/>
                            </button>
                            <button>
                                <img src='../images/remover-planos.png'/>
                            </button>
                        </div>

                        <div className='card'>
                            <figure className='cor-escolhida'>{cor}</figure>

                            <text> {plano} </text>

                            <p> situação </p>
                            <h4> {situacao} </h4>
                        </div>
                    </div>
                </aside>
            }
        </section>
    )
}