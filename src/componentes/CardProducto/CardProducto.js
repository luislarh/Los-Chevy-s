import "./Cardproducto.css";

function CardProducto() {
    return (
        <div className="cardP-container">
      <h1>Catálogo de Productos</h1>
      <div className="cards">
        <div className="cardP">
          <div className="cardP-image">
            <img src="/img/tostada.jpg" alt="Producto 1" />
          </div>
          <div className="cardP-content">
            <h3>Tostadas</h3>
            <p>Deliciosas tostadas horneadas.</p>
            <span className="price">$30.00</span>
            <button className="ver-mas-button">Ver Más</button>
          </div>
        </div>

        <div className="cardP">
          <div className="cardP-image">
            <img src="/img/totopos.jpeg" alt="Producto 2" />
          </div>
          <div className="cardP-content">
            <h3>Totópos</h3>
            <p>Crujientes triángulos de maíz dorados a la perfección</p>
            <span className="price">$40.00</span>
            <button className="ver-mas-button">Ver Más</button>
          </div>
        </div>

        <div className="cardP">
          <div className="cardP-image">
            <img src="/img/tostada.jpg" alt="Producto 1" />
          </div>
          <div className="cardP-content">
            <h3>Tostadas</h3>
            <p>Deliciosas tostadas horneadas.</p>
            <span className="price">$30.00</span>
            <button className="ver-mas-button">Ver Más</button>
          </div>
        </div>

        <div className="cardP">
          <div className="cardP-image">
            <img src="/img/totopos.jpeg" alt="Producto 2" />
          </div>
          <div className="cardP-content">
            <h3>Totópos</h3>
            <p>Crujientes triángulos de maíz dorados a la perfección</p>
            <span className="price">$40.00</span>
            <button className="ver-mas-button">Ver Más</button>
          </div>
        </div>

      </div>
    </div>
    );
}

export default CardProducto;