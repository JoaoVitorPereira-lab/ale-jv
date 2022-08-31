export default function Componente2(props){

    return(
        <div className='comp2'>
            
            <aside className='box-shadow'>  
                <div className='div-nome'>
                    <img src='../images/comp2.png'/>
                    <p> {props.nome} </p>
                </div>

                <div className='div-infos'>
                    <div className='div-row div-idade'>
                        <text> Idade </text>
                        <span className='nott2'> {props.idade} </span>
                    </div>

                    <div className='div-row div-nascimento'>
                        <text> Nascimento </text>
                        <span className='nott'> {props.nascimento} </span>
                    </div>

                    <div className='div-button'>
                        <button className="button-hobby"> Hobby </button>
                    </div>
                </div>
            </aside>

        </div>
    )
}