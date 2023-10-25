import "./Boton.css"


const Boton = (props) =>{
    return <div ClasName={props.clase}>
        <button >{props.children}</button>
    </div>
} 

export default Boton;