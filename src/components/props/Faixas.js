

export default function Faixas(props) {

    return (
        <div className='div-box'>
            <div className='div-tite'>
                <h2> {props.titAtual} </h2>
            </div>

            <div className={props.alinhamento}>
                <text> {props.infoAtual} </text>
                <img src={props.imgAtual} />
            </div>
        </div>
    )
}