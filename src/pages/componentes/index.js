import './index.scss'
import Componente from '../../components/componentes'

export default function Componentes() {
    
    return (
        <div className='comp'>
            <div className='div-titulo'>
                <h1> Estudando ReactJS | Componentes </h1>
            </div>

            <Componente 
                secao='Seção 01'
                lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.'
                alinhamento='box-column-row'
                alinhamento2='in-box'
                alinhamento3='box-row'
            />

            <Componente
                secao='Seção 02'
                lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.'
                alinhamento='box-column-row'
                alinhamento2='in-box'
                alinhamento3='box-row-reverse'
            />

            <Componente
                secao='Seção 03'
                lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non.'
                alinhamento='box-column-row aa'
                alinhamento2='in-box-secao3'
                alinhamento3='box-row-secao3'
            />
        </div>
    )
}