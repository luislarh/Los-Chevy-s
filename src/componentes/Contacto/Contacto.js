
import './Contacto.css';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import React, { useEffect } from 'react';

function Contacto() {
  const { i18n } = useTranslation("global");
  useEffect(() => {
    // Script de inicialización de EmailJS
    emailjs.init('R0TVC9uF6clfvrlOb');

    // Manejo del envío del formulario
    const btn = document.getElementById('button');
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
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
          <h1>{i18next.t('FormularioH1')}</h1>
          <form id="form">
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputEmail1">{i18next.t('labelNombre')}</label>
              <input type="text" className="form-control" placeholder={i18next.t('placeholderNombre')} name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">{i18next.t('labelApellido')}</label>
              <input type="text" className="form-control" placeholder={i18next.t('placeholderApellido')} name="last" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">{i18next.t('labelTelefono')}</label>
              <input type="number" className="form-control" placeholder={i18next.t('placeholderTelefono')} name="phone" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">{i18next.t('labelCorreo')}</label>
              <input type="email" className="form-control" placeholder={i18next.t('placeholderCorreo')} name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleInputPassword1">{i18next.t('labelMensaje')}</label>
              <textarea className="form-control" placeholder={i18next.t('placeholderMensaje')} name="message" required></textarea>
            </div>
            <input type="submit" className="btn btn-primary" id="button" value={i18next.t('buttoEnviar')} />
          </form>
        </div>

        <div className="col-lg-4 location-section">
          <h2 className="location-title">{i18next.t('h2Ubicacion')}</h2>
          <div className="location-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.1338603622022!2d-100.72034073042583!3d20.028003198836412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cd747943dc317%3A0xe2daa5ded8fce818!2sTortiller%C3%ADa%20y%20tostadas%20La%20Guadalupana!5e0!3m2!1ses!2smx!4v1698360285045!5m2!1ses!2smx" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="contact-info">
            <p className='contact-item'>{i18next.t('pCorreo')}: <a className='aa' href="mailto:laguadalupana35@gmail.com">laguadalupana35@gmail.com</a></p>
            <p className='contact-item'>{i18next.t('pTelefono')}: <a className='aa' href="tel:+524171723501"> 417 172 3501</a></p>
            <p className="contact-item">{i18next.t('pDireccion')} </p>
          </div>
          <a href="https://wa.me/+524171573629?text=Buenos%20días,%20me%20gustaría%20comprar%20tostadas" target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-button">{i18next.t('buttoWhatsapp')}</button>
          </a>
        </div>
      </div>

    </div>

  );
}

export default Contacto;