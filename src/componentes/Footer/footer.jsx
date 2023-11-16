import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <div className="footertodo">
      <div className='footercuerpo'>
        <img src="/Laguadalupana.png" alt="" className="logo" />
        <div className="social-icons-container">
          <a href="https://www.facebook.com/tostadaslaguadalupana" className="social-icon"></a>
          <a href="" className="social-icon"></a>
        </div>
        <ul className="footer-menu-container">
          <li className="menu-item">Francisco I Madero #1135</li>
          <li className="menu-item">Esquina Aquiles Serdán</li>
          <li className="menu-item">Tel. 4171728387</li>

        </ul>
        <span className="copyright">2023. Los Chevys. Todos los derechos reservados.</span>

      </div>
    </div>
  );
}

export default Footer;
