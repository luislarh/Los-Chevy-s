
import './Contacto.css';
import emailjs from 'emailjs-com';

import React, { useEffect } from 'react';

function Contacto() {
  useEffect(() => {
    // Script de inicialización de EmailJS
    emailjs.init('R0TVC9uF6clfvrlOb');

    // Manejo del envío del formulario
    const btn = document.getElementById('button');
    const form = document.getElementById('form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      btn.value = 'Enviando...';
      
      const serviceID = 'default_service';
      const templateID = 'template_wxd2kvj';
      
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar Correo';
          alert('¡Enviado!');
        })
        .catch((err) => {
          btn.value = 'Enviar Correo';
          alert(JSON.stringify(err));
        });
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h1>Formulario de Contacto</h1>
          <form id="form">
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputEmail1">Nombre</label>
              <input type="text" className="form-control" placeholder="Nombre" name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">Apellidos</label>
              <input type="text" className="form-control" placeholder="Apellidos" name="last" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">Teléfono</label>
              <input type="number" className="form-control" placeholder="Teléfono" name="phone" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">Correo Electrónico</label>
              <input type="email" className="form-control" placeholder="Email" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">Mensaje</label>
              <textarea className="form-control" placeholder="Ingresa el mensaje" name="message" required></textarea>
            </div>
            <input type="submit" className="btn btn-primary" id="button" value="Enviar Correo" />
          </form>
        </div>

        <div className="col-lg-4 location-section">
            <h2 className="location-title">Nuestra Ubicación</h2>
            <div className="location-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.1338603622022!2d-100.72034073042583!3d20.028003198836412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cd747943dc317%3A0xe2daa5ded8fce818!2sTortiller%C3%ADa%20y%20tostadas%20La%20Guadalupana!5e0!3m2!1ses!2smx!4v1698360285045!5m2!1ses!2smx" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-info">
                <p className='contact-item'>Correo: <a className='aa' href="mailto:laguadalupana35@gmail.com">laguadalupana35@gmail.com</a></p>
                <p className='contact-item'>Teléfono: <a  className='aa'  href="tel:+524171723501"> 417 172 3501</a></p>
                <p className="contact-item">Dirección: Francisco I. Madero #1035 esquina con Aquiles Serdán</p>
            </div>
            <a href="https://wa.me/4171723501?text=Buenos%20días,%20me%20gustaría%20comprar%20tostadas" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-button">Contactar por WhatsApp</button>
            </a>
            </div>
      </div>
      
    </div>
    
  );
}

export default Contacto;