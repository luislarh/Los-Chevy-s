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
            <p>Deliciosas tostadas horneadas con un crujido perfecto en cada bocado, son la elección ideal para tu comida. Preparadas con ingredientes frescos y horneadas a la perfección, estas tostadas son la forma ideal de comenzar tu día con un sabor delicioso y saludable.</p>
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
            <p>Disfruta de la auténtica explosión de sabor con nuestros totopos, crujientes triángulos de maíz dorados a la perfección y sazonados con las mejores especias. Perfectos como aperitivo o acompañamiento, nuestros totopos te brindarán una experiencia de sabor inigualable.</p>
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
            <p>Deliciosas tostadas horneadas con un crujido perfecto en cada bocado, son la elección ideal para tu comida. Preparadas con ingredientes frescos y horneadas a la perfección, estas tostadas son la forma ideal de comenzar tu día con un sabor delicioso y saludable.</p>
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
            <p>Disfruta de la auténtica explosión de sabor con nuestros totopos, crujientes triángulos de maíz dorados a la perfección y sazonados con las mejores especias. Perfectos como aperitivo o acompañamiento, nuestros totopos te brindarán una experiencia de sabor inigualable.</p>
            <span className="price">$40.00</span>
            <button className="ver-mas-button">Ver Más</button>
          </div>
        </div>

      </div>
    </div>
    );
}

export default CardProducto;