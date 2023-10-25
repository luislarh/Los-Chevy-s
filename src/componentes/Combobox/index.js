import "./Combobox.css";

const Combobox = (props) => {
    return <div className="Combobox">
        <label>{props.texto}</label>
        <select value = {props.index}>
            <option disable hidden value="" dafaultValue="" selected>Seleccion de equipo</option>
            {props.equipos.map((equipo, index) => 
            <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default Combobox;