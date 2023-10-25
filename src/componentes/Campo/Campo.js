import "./Campo.css";

const Campo = ( props ) =>{

    return <div className="campo">
        <label>{props.texto}</label> 
        
        <input 
            placeholder={props.placeholder}
            required={props.requerido}
            type={props.tipo}
            algo={props.algo}
        />
    </div>
}

export default Campo;