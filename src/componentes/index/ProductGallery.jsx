import React, { useState } from 'react';
import './ProductGallery.css'; // Asegúrate de importar tu archivo CSS

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: 'Totopos',
      image: '/img/galeria/platoto.jpg',
      description: 'Los totopos de La Tostadería La Guadalupana en Acámbaro son irresistibles. Elaborados con maíz de calidad y recetas tradicionales, estos crujientes triángulos son ideales para sumergir en salsas o disfrutar solos. Descubre la auténtica esencia de Acámbaro en cada bocado de nuestros deliciosos totopos.',
    },
    {
      id: 2,
      name: 'Tortillas',
      image: '/img/galeria/torti.jpg',
      description: 'Nuestras tortillas son el complemento perfecto para tus comidas. Hechas con maíz de la más alta calidad y siguiendo recetas tradicionales, nuestras tortillas frescas realzan el sabor de tus platillos favoritos. En La Tostadería La Guadalupana, te ofrecemos tortillas de primera que te transportarán al corazón de Acámbaro en cada mordisco.',
    },
    {
      id: 3,
      name: 'Tostadas',
      image: '/img/galeria/tostada22.jpg',
      description: ' Las tostadas de La Guadalupana son un verdadero placer para los amantes de la comida mexicana. Preparadas con esmero, nuestras tostadas son crujientes y resistentes, ideales para cargar con tus ingredientes favoritos. Su frescura y sabor auténtico te harán apreciar la diferencia en cada bocado.',
    },
    {
      id: 4,
      name: 'Tacos',
      image: '/img/galeria/tacosmolde.jpg',
      description: 'Nuestros tacos de molde son un símbolo de Acámbaro. Están hechos con nuestras tortillas de maíz recién hechas y rellenos de ingredientes frescos y deliciosos. Ya sea con carnitas, chicharrón prensado, guisados tradicionales o opciones vegetarianas, nuestros tacos de molde reflejan el auténtico sabor de la región de Acámbaro en cada bocado.',
    },
    // Agrega más productos según sea necesario
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-gallery" >
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openProductDetail(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="product-detail" onClick={closeProductDetail}>
          <div className="product-detail-inner" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <button onClick={closeProductDetail}>Cerrar</button>
          </div>
        </div>
      )}
      <br></br>
    </div>
  );
};

export default ProductGallery;
