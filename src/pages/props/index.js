import { useState } from 'react'
import './index.scss'

import TextsArea from '../../components/props/textsareas'
import Faixas from '../../components/props/Faixas'

export default function Props(){
    
    const [tit1Atual, setTit1Atual] = useState('Título 01');
    const [tit2Atual, setTit2Atual] = useState('Título 02');

    const [img1Atual, setImg1Atual] = useState('../images/img1-props.png');
    const [img2Atual, setImg2Atual] = useState('../images/img2-props.png');

    const [info1Atual, setInfo1Atual] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.');
    const [info2Atual, setInfo2Atual] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.');

    return(
        <div className='page-props'>

            <div className='tit-estudo'>
                <h3> Estudando ReactJS | Props </h3>
            </div>

            <div className='div-textarea'>
                <TextsArea 
                    titAtual={tit1Atual}           imgAtual={img1Atual}           infoAtual={info1Atual}
                    setTitAtual={setTit1Atual}     setImgAtual={setImg1Atual}     setInfoAtual={setInfo1Atual}
                />

                <TextsArea 
                    titAtual={tit2Atual}           imgAtual={img2Atual}           infoAtual={info2Atual}
                    setTitAtual={setTit2Atual}     setImgAtual={setImg2Atual}     setInfoAtual={setInfo2Atual}
                />
            </div>

            <Faixas 
                titAtual={tit1Atual}
                alinhamento='div-flex-row'
                infoAtual={info1Atual}
                imgAtual={img1Atual}
            />

            <Faixas 
                titAtual={tit2Atual}
                alinhamento='div-flex-row-reverse'
                infoAtual={info2Atual}
                imgAtual={img2Atual}
            />

        </div>
    )
}