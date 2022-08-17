import { useState } from 'react'
import './index.scss'

export default function SessionRenderizacao(){

    const [mostrar, setMostrar] = useState(false);

    function exibir(){
        setMostrar(true);
    }

    return(
        <div className='center'>
            <h1> Biscoitinho da Sorte </h1>

            <div>
                <button onClick= {exibir}> Abrir </button>

                {mostrar === true &&
                    <div> Você é incrível!!! </div>
                }
            </div>
        </div>
    )

}