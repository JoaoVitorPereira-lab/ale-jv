import './index.scss'
import { useEffect, useState } from 'react'

export default function(){
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [n3, setN3] = useState();

    const [media, setMedia] = useState(0);
    const [resultado, setResultado] = useState('---');
    
    function situacaoAluno(media){
        if(n1 < 0 || n1 > 10){
            return('Insira uma nota de 0 a 10 =D');
        }
        if(n2 < 0 || n2 > 10){
            return('Insira uma nota de 0 a 10 =D');
        }
        if(n3 < 0 || n3 > 10){
            return('Insira uma nota de 0 a 10 =D');
        }
        
        if(!n1 || !n2 || !n3){
            return('Aguardando...')
        }
        if(media >= 5){
            return('Aluno passou =D');
        }
        if(media <= 5){
            return('Aluno Reprovou =(');
        }
    }

    function calcularMedia(){
        let m = (n1 + n2 + n3) / 3
        setMedia(m);
    }

    function verificarSituacao(){
        let x = situacaoAluno(media);
        setResultado(x);
    }

    useEffect(() => {
        calcularMedia();
    }, [n1, n2, n3])

    useEffect(() => {
        verificarSituacao();
    }, [media])

    return(
        <section className='page-verificarnotas2'>
            <h2> Situação Aluno </h2>

            <div className='box1'>
                <div className='notas'>
                    <div>
                        <input id='none' type="number" value={n1} onChange={e => setN1(Number(e.target.value))} />
                    </div>
                    <div>
                        <input type="number" value={n2} onChange={e => setN2(Number(e.target.value))} />
                    </div>
                    <div>
                        <input type="number" value={n3} onChange={e => setN3(Number(e.target.value))} />
                    </div>
                </div>
            
                <div className='resul'>
                    {resultado}
                </div>
            </div>
        </section>
    )
}