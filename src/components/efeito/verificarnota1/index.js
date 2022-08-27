import '../verificarnota2/index.scss'
import { useEffect, useState } from 'react'

export default function(){
    const [n1, setN1] = useState();
    const [resultado, setResultado] = useState('---');
    
    function situacaoAluno(){
        if(n1 < 0 || n1 > 10){
            return('Insira uma nota de 0 a 10 =D');
        }
        
        if(!n1){
            return('Aguardando...')
        }
        if(n1 >= 5){
            return('Aluno passou =D');
        }
        if(n1 <= 5){
            return('Aluno Reprovou =(');
        }
    }

    function verificarSituacao(){
        let x = situacaoAluno();
        setResultado(x);
    }

    useEffect(() => {
        verificarSituacao();
    }, [n1])

    return(
        <section className='page-verificarnotas2'>
            <h2> Situação Aluno </h2>

            <div className='box1'>
                <div className='notas'>
                    <div>
                        <input id='none' type="number" value={n1} onChange={e => setN1(Number(e.target.value))} />
                    </div>
                </div>
            
                <div className='resul'>
                    {resultado}
                </div>
            </div>
        </section>
    )
}