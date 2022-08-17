import { useState } from  'react'
import './index.scss' 

export default function Renderizacao () {
    const [mostrar, setMostrar] = useState(false);
    const [acertou,setAcertou] = useState('');
    const [resposta,setResposta] = useState(false);

    function exibir() {
        setMostrar(true);
    }

    
    function ross(event) {
        if (event.target.checked) {
            setResposta('Ele só fala de dinossauros')
            setAcertou(false);
        }
    }

    function joey(event) {
        if (event.target.checked) {
            setResposta('How youuu Dooooing?')
            setAcertou(true);
        }
    }

    

    return(
        <div className='teste'>
            <h1> Renderização Condicional </h1>
            <hr/>

            <div>
                <button onClick={exibir}> Tenho uma duvidinha para vc... </button>

                {mostrar === true &&
                    <div>
                        <h1> Quer namorar cmg </h1>
                        <img src="http://pm1.narvii.com/6739/5d9c6c83a94259be719d91d64b4516084a30d347v2_00.jpg"/>
                    </div>
                }
            </div>

            <hr/>

            <div>
                <h1> Quiz Friends</h1>

                <h3>Qual personagem fala How you doiing?</h3>

                <input type= "radio" name= "quiz" onChange={ross}/> Ross
                <input type= "radio" name= "quiz" /> Monica
                <input type= "radio" name= "quiz" /> Rachel
                <input type= "radio" name= "quiz" /> Chandler
                <input type= "radio" name= "quiz" /> Phoebe
                <input type= "radio" name= "quiz" onChange={joey}/> Joey

                {resposta === '' && 
                <div> Aguardando resposta... </div>
                }

                {resposta !== '' && 
                <div> {resposta} </div>}


                {acertou === true &&
                    <div>
                        <h2> Acertou!!!</h2>
                        <img src='https://c.tenor.com/CR1Db0YzUwwAAAAd/joey-friends.gif' alt='' />
                    </div>
                }

            </div>
        </div>    
    );
}

