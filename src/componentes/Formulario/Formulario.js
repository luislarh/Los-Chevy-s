import Campo from '../Campo/Campo';
import Combobox from '../Combobox/';
import Boton from '../Boton/Boton'


import "./Formulario.css";


const Formulario = ( props ) =>{

    
    return <section className ="formulario">
        <form>
            <h2> Rellena el formulario para crear el colaborador</h2>

            <Campo texto="Nombre" placeholder="Ingresa el nombre"></Campo>
            <Campo tipo="password" texto="Puesto" placeholder="Ingresa el puesto"></Campo>
            <Campo requerido ="true" texto="Foto" placeholder="Ingresa la url de la foto"></Campo>
            <Combobox  texto = "Equipo" equipos= {props.equipos} ></Combobox>
            <Boton clase="danger">Crear uno</Boton>
            <Boton clase="success">Crear uno</Boton>
        </form>
    </section>
}
export default Formulario;

