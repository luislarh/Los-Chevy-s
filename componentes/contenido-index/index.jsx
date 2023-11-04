import "./contenido.css";
import "../cards/index";

import Cards from "../cards/index";


const Contenido = () =>{
    return <section className="contenido">
        
        <div className="Banner">
            <img src="/imagenes/banner_totopos.jpg" alt="" />
        </div>
        <div className="Banner">
            <img src="/imagenes/banner_tacos.jpg" alt="" />
        </div>

        <h2 className="Titulo_tarjets">Prueba nuestros productos</h2>

        <div className="cartas">
            <Cards title="Tostadas" content="Descripcion" src="/imagenes/tostadas.png" alt="Imagen de Tostadas"/>
            <Cards title="Totopos" content="Descripcion" src="/imagenes/totopos.png" alt="Imagen de Totopos"/>
            <Cards title="Tacos" content="Descripcion" src="/imagenes/Imagen1.png" alt="Imagen de Tacos"/>
        </div>

    </section>
}

export default Contenido;