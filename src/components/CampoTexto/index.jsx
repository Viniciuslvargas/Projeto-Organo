import './CampoTexto.css'

const CampoTexto = (props) => {

let valor = ''   
const aoDigitado = (evento) => {
    valor = evento.target.value
    console.log(evento.target.value)
}


    const placeholderModificada = `${props.placeholder}...`
    return(
        <div className="campo-texto">
            <label>
                {props.label}
                </label>
            <input value={valor} onChange={aoDigitado} required = {props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto