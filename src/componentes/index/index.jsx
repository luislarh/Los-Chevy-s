import "./contenido.css";

import Badge from 'react-bootstrap/Badge';
import ProductGallery from './ProductGallery';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Index = () => {
  const { i18n } = useTranslation("global");
  return (
    <section className="contenido">
      <div className='buttonContainer'>
        <button className="btnEspanol" onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button className="btnIngles" onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>

      <h1 className="Titulo_tarjets">
        <Badge bg="dark">{i18next.t('indexTitulo')}</Badge>
      </h1>
      <ProductGallery />
    </section>
  );
}

export default Index;