import './Texto2.css';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


function Texto2() {
  return( 
    <Row xs={1} md={1} className="g-4">
        <div className="d-flex">
          <Card.Body>
          <Card.Title> Visión </Card.Title>
            <Card.Text>
            <div className="text-justify">
              En Tostadería La Guadalupana, nuestra misión es ofrecer a nuestros clientes productos a base de maíz de la más alta calidad, como tostadas, tacos dorados, totopos y cazuelitas, preparados con ingredientes frescos y auténticos. Estamos comprometidos a mantener la excelencia en el servicio al cliente, preservando nuestra tradición culinaria y fomentando un ambiente cálido y acogedor para todos nuestros visitantes. Nuestra misión es destacar la importancia del maíz en la gastronomía mexicana, resaltando su versatilidad y sabor en cada producto que ofrecemos.
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Img variant="right" src="/img/tostad.jpeg   " />
        </div>
        </Row> 
);
}



export default Texto2;