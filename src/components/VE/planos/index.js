import { useState } from 'react'
import './index.scss'

export default function Planos(){

    const [lista, setLista] = useState([]);

    const [plano, setPlano] = useState(''); 
    const [cor, setCor] = useState('');
    const [situacao, setSituacao] = useState('');

    function adicionarPlano(){
        let novaLista = [...lista, [cor, plano, situacao]];
        setLista(novaLista);
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
                        placeholder='Digite aqui a situação'
                />
                <button className='button-adicionar' onClick={adicionarPlano}> Adicionar </button>
            </div>

            <aside>
                {lista.map(item =>
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
                            <input  disabled
                                    type="color" 
                                    className='cor-escolhida'
                                    value={item.cor}
                                    id="cor-bola" 
                            />

                            <text> {item.plano} </text>

                            <p> situação </p>
                            <h4> {item.situacao} </h4>
                        </div>
                    </div>
                )}
            </aside>
            
        </section>
    )
}