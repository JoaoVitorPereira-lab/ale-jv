

export default function TextsArea(props) {

    return (
        <section className='tites tite1'>
            <textarea className='t-a tite1' value={props.titAtual} onChange={e => props.setTitAtual(e.target.value)} />
            <textarea className='t-a img1' value={props.imgAtual} onChange={e => props.setImgAtual(e.target.value)} />
            <textarea className='t-a-i infos infos1' value={props.infoAtual} onChange={e => props.setInfoAtual(e.target.value)} />
        </section>
    )
}