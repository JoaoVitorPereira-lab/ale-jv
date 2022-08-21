import './sobremim.scss'

export default function SobreMim(props) {

    return (
        <div className='div-sobremim'>
            <h3> Sobre mim </h3>

            <div className='div-name-date'>
                <input
                    className='nome'
                    value={props.nome}
                    onChange={e => props.setNome(e.target.value)}
                    type="text"
                    placeholder='Informe seu nome'
                />
                <input 
                    className='data'
                    value={props.nascimento}
                    onChange={e => props.setNascimento(e.target.value)}
                    type="date" />
            </div>

            <div className='div-infos'>
                <input 
                    className='medida'
                    value={props.altura}
                    onChange={e => props.setAltura(e.target.value)}
                    type="number"
                    placeholder='Altura'
                />
                <input
                    className='medida peso'
                    value={props.peso}
                    onChange={e => props.setPeso(e.target.value)}
                    type="number"
                    placeholder='Peso'
                />
                <input  
                    className='input-checkbox' 
                    value={props.checado} 
                    type="checkbox" 
                    onChange={e => props.checked(e.target.value)}
                />
                <span className='span-check'> Trabalha Atualmente </span>
                <button onClick={props.exibir}> Visualizar </button>
            </div>
        </div>
    )
}