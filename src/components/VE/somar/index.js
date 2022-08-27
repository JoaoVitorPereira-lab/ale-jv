import { useState } from 'react'
import './index.scss'

export default function Somar() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function soma(){
        let x = parseInt(num1) + parseInt(num2);
        setResultado(x);
    }
    
    return (
        <div className='div-somar'>
            <p> Somar dois Números </p>

            <div className='somar-row'>
                <input type="number" id='num1' value={num1} onChange={e => setNum1(e.target.value)}/>
                <input type="number" id='num2' value={num2} onChange={e => setNum2(e.target.value)}/>
                <button onClick={soma}> Somar </button>
                <input type="number" id='resultado' value={resultado}/>
            </div>
        </div>
    )
}