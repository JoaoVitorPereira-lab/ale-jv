import './index.scss'
import Comp2 from '../../components/componentes2'

export default function Componente2() {

    return (
        <section>
            <div className='tite'>
                <h1> Estudando ReactJS | Componentes II </h1>
            </div>

            <div className='comp2'>
                
                <Comp2
                    nome="Bruno"
                    idade="33"
                    nascimento="1989"
                />

                <Comp2
                    nome="Bruno"
                    idade="33"
                    nascimento="1989"
                />

                <Comp2
                    nome="Bruno"
                    idade="33"
                    nascimento="1989"
                />

                <Comp2
                    nome="Bruno"
                    idade="33"
                    nascimento="1989"
                />
            </div>
        </section>
    )
}