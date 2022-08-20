import './index.scss'

export default function Biscoito(props){
    return(
        <div className='page-biscoito'>
            <div className='biscoito-da-sorte'>
                <h2> Biscoitinho da Sorte </h2>

                <div>
                    <button onClick= {props.exibir}> Abrir </button>

                    {props.mostrar === true &&
                        <div className='biscoito'> Sempre haverá pessoas melhores e piores em
                        <br/>habilidades diferentes. Avance e ajude. </div>
                    }
                </div>
            </div>
        </div>
    )
}