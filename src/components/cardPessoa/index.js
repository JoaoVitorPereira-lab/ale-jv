import './index.scss'

export default function CardPessoa (props) {

    function minhaIdade(){
        if (props.idade !== undefined)
            alert(' Minha idade é ' + props.idade ); 
        else 
            alert(' Não tenho idade') ;
    }

    function lerTema(){
        if (props.tema !== undefined)
            return props.tema;
        else 
            return 'tropical';
    }

    function alinhamento(){
        if(props.alinhamento !== undefined)
            return props.alinhamento;
        else
            return 'alinhamento';
    }


    return (
        <section className={alinhamento()}> 
            <div className={lerTema()}>
                <img src= {props.avatar} alt=""/>

                <div> Ooiii, eu sou {props.nome} </div>

                <button onClick={minhaIdade} > Minha Idade</button>
            </div>
        </section>
    )

}