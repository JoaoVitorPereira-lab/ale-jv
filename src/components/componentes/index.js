

export default function Componentes(props){

    return(
        <section className={props.alinhamento}>
            <div className={props.alinhamento2}>
                <h3> {props.secao} </h3>

                <div className={props.alinhamento3}>
                    <text> {props.lorem} </text>
                    <img src='../images/comp-img.png' alt=''/>
                </div>
            </div>
        </section>
    )
}