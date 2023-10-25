// import './Texto.css';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Texto() {
  return (
    <Row xs={1} md={1} className="g-4">
        <div className="d-flex">
          <Card.Img variant="left" src="/img/tostad.jpeg" />
          
          <Card.Body>
            <Card.Title> Misión </Card.Title>
            <Card.Text>
                <div className='text-justify'>
            Ser reconocidos como líderes en la industria de alimentos de calidad, destacándonos por nuestra autenticidad y sabor único. Nos esforzamos por expandir nuestra presencia en el mercado y llegar a ser la primera elección de nuestros clientes cuando buscan experiencias culinarias deliciosas y auténticas, basadas en la versatilidad y riqueza del maíz como ingrediente fundamental en nuestra oferta
            </div>
            </Card.Text>
          </Card.Body>
        </div>
    </Row>
  );
}

export default Texto;
