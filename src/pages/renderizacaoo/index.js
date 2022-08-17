import { useState } from 'react'
import './index.scss'

export default function SessionRenderizacao(){

    const [mostrar, setMostrar] = useState(false);

    function exibir(){
        setMostrar(true);
    }

    return(
        <div className='center'>

            <div className='biscoito-da-sorte'>
                <h2> Biscoitinho da Sorte </h2>

                <div>
                    <button onClick= {exibir}> Abrir </button>

                    {mostrar === true &&
                        <div className='biscoito'> Sempre haverá pessoas melhores e piores em
                        <br/>habilidades diferentes. Avance e ajude. </div>
                    }
                </div>
            </div>
            <hr/>

            <div className='friends'>

                <div className='friend-poser'>
                    <h2>Friend's Poser?</h2>
                    <img src='../images/image1.png'/>
                </div>

                <div className='dino'>
                    <p>Qual nome do personagem que ama dinossauros na série Friends?</p>
                    <input type="text" name= "resposta" placeholder='Responda aqui'/>
                </div>


            </div>
        </div>
    )

}