import "./contenido.css";

import Badge from 'react-bootstrap/Badge';
import ProductGallery from './ProductGallery';

const Index = () => {
  return (
    <section className="contenido">
      <h1 className="Titulo_tarjets">
        <Badge bg="dark">Nuestros Productos</Badge>
      </h1>
      <ProductGallery />
    </section>
  );
}

export default Index;