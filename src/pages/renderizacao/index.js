import { useState } from 'react'
import './index.scss'
import BiscoitoSorte from '../../components/biscoito'

export default function Renderizacao(){

    const [mostrar, setMostrar] = useState(false);

    function exibir(){
        setMostrar(true);
    }

    function Resposta(){
        
    }

    function mostrardino(){
        if(mostrar === true){
            return 
                <div>
                    <img src='../images/image2.png'/>
                </div>;
        }
        else{
            return 
                <div>
                    <img src='../images/image1.png'/>
                </div>;
        }
    }

    return(
        <div className='center'>

            <BiscoitoSorte exibir={exibir} mostrar={mostrar}/>

            <hr/>

            <div className='friends'>

                <div className='friend-poser'>
                    <h2>Friend's Poser?</h2>
                </div>

                <div className='dino'>

                    {mostrar === true &&
                        <div>
                            <img src='../images/image1.png'/>
                        </div>
                    }
                    
                    {mostrar === false &&
                        <div>
                            <img src='../images/image2.png'/>
                        </div>
                    }


                    <div className='perguntaa'>
                        <p>Qual nome do personagem que ama dinossauros na série Friends?</p>
                        <input
                            onChange={mostrardino}
                            type="text" 
                            name="resposta"
                            placeholder='Responda aqui'
                        />
                    </div>
                </div>

            </div>
        </div>
    )

}