import Campo from '../Campo/Campo';

import "./Formulario2.css";


const Formulario2 = () =>{

    return <section className ="formulario">
        <form>
            <h2> Rellena el formulario para crear el colaborador</h2>

            <Campo texto="Usuario" placeholder="Ingresa el usuario"></Campo>
            <Campo tipo="password" texto="Contraseña" placeholder="Ingresa la contraseña"></Campo>
        </form>
    </section>
}

export default Formulario2;

