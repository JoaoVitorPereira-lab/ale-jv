import './ficha.scss'
/* props.idade(props.nascimento) calcular idade, que deu errado*/

export default function Ficha(props) {

    return (
        <div className='div-ficha'>
            {props.mostrar === true &&
                <div>
                    <h2> Ficha </h2>

                    <section className='sec-nome'>
                        <text> Nome: </text>
                        <span> {props.nome} </span>
                    </section>

                    <section className='sec-nascimento'>
                        <text> Nascimento: </text>
                        <span> {props.nascimento} ( anos) </span>
                    </section>

                    <section className='diferentona'>
                        <div className='not-div'>
                            <text> Altura: </text>
                            <span className='span-diferentona alt'> {props.altura} </span>
                        </div>

                        <div>
                            <text> Peso: </text>
                            <span className='span-diferentona'> {props.peso} </span>
                        </div>

                        <div>
                            <text> IMC: </text>
                            <span className='span-diferentona'> {props.calcularIMC(props.peso, props.altura)} </span>
                        </div>
                    </section>

                    <section className='sec-trabalha'>
                        <text> Trabalha: </text>
                        {props.checado === true &&
                            <span> Sim </span>
                        }
                        {props.checado === false &&
                            <span> Não </span>
                        }
                    </section>

                </div>
            }
        </div>
    )
}