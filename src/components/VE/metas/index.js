import { useState } from 'react'
import './index.scss'

export default function Tarefas(props) {
    
    const [tarefa, setTarefa] = useState('');
    const [lista, setLista] = useState([]);

    function adicionarTarefa() {
        let novaLista = [...lista, tarefa];
        setLista(novaLista);
        setTarefa('');
    }

    function removerTarefa(t) {
        let novaLista = lista.filter(item => item !== t);
        setLista(novaLista);
    }

    return (
        <section className="Page-metas">
            <div className='div-metas'>
                <h1>Metas para os próximos 5 anos</h1>

                <div>
                    <input  type='text' 
                            placeholder='Digite aqui a meta'   
                            value={tarefa} 
                            onChange={e => setTarefa(e.target.value)} 
                    />
                    <button onClick={adicionarTarefa}>Adicionar</button>
                </div>
                <ul>
                    {lista.map(item =>
                        <li className="li-metas"> 
                            <text> {item} </text>
                            <span onClick={e => removerTarefa(item)}> (x) </span>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}