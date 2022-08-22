import { useState } from 'react'
import './index.scss'
import SobreMim from '../../components/VE/sobremim/sobremim'
import Ficha from '../../components/VE/sobremim/ficha'
import Metas from '../../components/VE/metas'
import Planos from '../../components/VE/planos/index'

export default function VariaveldeEstado(){
    
    const [mostrar, setMostrar] = useState(false);
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [checado, setChecado] = useState(false);

    function exibir(){
        setMostrar(true);
    }

    function checked(){
        if(checado === false){
            setChecado(true);
        }
        else
            setChecado(false);
    }

    function calcularIMC(peso, altura){
        const resposta = Number(peso/(altura*altura)).toFixed(2);
        return resposta;
    }

    /* function idade(nasc){
        var data = new Date();
        var ano = data.getFullDate();
        var mes = data.getMonth();
        var dia = data.getDate();
        var anoAtual = Number(ano+mes+dia);
        
        var anoUser = nasc.getFullDate();
        var mesUser = nasc.getMonth();
        var diaUser = nasc.getDate();
        var nascimentoUser = Number(anoUser+mesUser+diaUser);

        let resposta = Number(anoAtual - nascimentoUser);
        return resposta;
    } */

    return(
        <div className='page-ve'>
            <section className='sec-sobremim'>
                <SobreMim 
                    nome={nome}             nascimento={nascimento}
                    setNome={setNome}       setNascimento={setNascimento}

                    altura={altura}         peso={peso}         checado={checado}
                    setAltura={setAltura}   setPeso={setPeso}   checked={checked}

                    exibir={exibir}
                />

                <Ficha
                    mostrar={mostrar}
                    nome={nome}
                    nascimento={nascimento}
                    altura={altura}
                    peso={peso}
                    calcularIMC={calcularIMC}
                    checado={checado}
                    /* idade={idade} */
                />
            </section>

            <section className='sec-sobremim'>
                <Metas />
            </section>

            <section className='sec-sobremim'>
                <Planos />
            </section>
        </div>
    )
}