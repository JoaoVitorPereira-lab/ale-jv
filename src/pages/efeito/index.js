import './index.scss'
import VerificarNota2 from '../../components/efeito/verificarnota2'
import VerificarNota1 from '../../components/efeito/verificarnota1'

export default function(){

    return(
        <section className='page-situacao-aluno-3notas'>
            <div className='div-box'>
                <VerificarNota1 />
            </div>
            
            <div className='div-box'>
                <VerificarNota2 />
            </div>
        </section>
    )
}