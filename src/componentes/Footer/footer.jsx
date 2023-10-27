import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        
        <footer className="custom-footer">
        <div className="custom-container">
          <div className="footer-content">
            <div className="contacto-info">
              <h3>Contacto</h3>
              <p>Correo: <a href="mailto:Laguadalupana35@gmail.com">Laguadalupana35@gmail.com</a></p>
              <p>Teléfono: <a href="tel:+524171235555">+52 417 123 5555</a></p>
              <p>Dirección: Calle Francisco I Madero Esq. Leandro Valle, #1035, 38600</p>
            </div>
            <div className="redes-sociales">
              <h3>Redes Sociales</h3>
              <a href="https://www.facebook.com/Tortilleria" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>Facebook
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>Instagram
              </a>
            </div>
            <div className="derechos-reservados">
              <p >Desarrollado por Los Chevy's 2023</p>
            </div>
          </div>
        </div>
      </footer>
    );
}      
  
  export default Footer;
  