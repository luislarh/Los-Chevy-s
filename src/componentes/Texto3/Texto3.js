
import './Texto3.css';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Texto3 (){
    
    return (
        <Row xs={1} md={1} className="g-4">
      <div className="d-flex">
        <Card.Img variant="left" src="/img/tostad.jpeg" />
        
        <Card.Body>
          <Card.Title>Valores</Card.Title>
          <Card.Text>
          <div className='text-justify'>
            <ul>
                
              <li>
                <strong>Calidad:</strong> Nos esforzamos por utilizar ingredientes a base de maíz de la más alta calidad en todos nuestros productos, asegurando que sean deliciosos y auténticos.
              </li>
              <li>
                <strong>Autenticidad:</strong> Valoramos y preservamos las auténticas recetas y tradiciones culinarias mexicanas, destacando la versatilidad y riqueza del maíz en cada producto que ofrecemos.
              </li>
              <li>
                <strong>Sabor:</strong> Nuestra pasión radica en resaltar el sabor único del maíz en todos nuestros productos a base de este ingrediente, proporcionando experiencias culinarias sabrosas y memorables.
              </li>
              <li>
                <strong>Atención al Cliente:</strong> La satisfacción de nuestros clientes es una prioridad. Ofrecemos un servicio cordial y atento, asegurándonos de que cada visita sea especial y educativa sobre la importancia del maíz en nuestra cultura.
              </li>
              <li>
                <strong>Innovación:</strong> Buscamos constantemente formas de mejorar y evolucionar, manteniéndonos al día con las tendencias culinarias y adaptando nuestro menú para destacar las variedades de productos a base de maíz.
              </li>
            </ul>
            </div>
          </Card.Text>
        </Card.Body>
      </div>
    </Row>
    );
    }

export default Texto3;