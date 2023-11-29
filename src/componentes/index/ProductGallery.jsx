import React, { useState } from 'react';
import './ProductGallery.css'; // Asegúrate de importar tu archivo CSS
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const ProductGallery = () => {
  const { i18n } = useTranslation("global");
  const products = [
    {
      id: 1,
      name: 'Totopos',
      image: '/img/galeria/platoto.jpg',
      description: i18next.t('descripcionTotopos'),
    },
    {
      id: 2,
      name: 'Tortillas',
      image: '/img/galeria/torti.jpg',
      description: i18next.t('descripcionTortillas'),
    },
    {
      id: 3,
      name: 'Tostadas',
      image: '/img/galeria/tostada22.jpg',
      description: i18next.t('descripcionTostadas'),
    },
    {
      id: 4,
      name: 'Tacos',
      image: '/img/galeria/tacosmolde.jpg',
      description: i18next.t('descripcionTacos'),
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
      {/* <div className='buttonContainer'>
        <button className="btnEspanol" onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button className="btnIngles" onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div> */}
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
            <button onClick={closeProductDetail}>X</button>
          </div>
        </div>
      )}
      <br></br>
    </div>
  );
};

export default ProductGallery;
