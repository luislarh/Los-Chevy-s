import "./cards.css";

const Cards = ({title, content, src, alt}) =>{
    return <div className="tarjets">
        <img src={src} alt={alt} />
        <h4>{title}</h4>
        <p>{content}</p>
        <button className="boton">Ir a productos</button>
    </div>

}

export default Cards;