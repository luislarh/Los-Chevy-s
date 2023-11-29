import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Texto.css';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


function Texto() {

  const { i18n } = useTranslation("global");


  const cardStyle = {
    padding: '0',
    width: '70%',
    margin: '0 auto 20px',
    backgroundColor: '#fafbfd',
    border: '1px solid #fff',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
  };

  const mediaStyle = {
    height: '450px',
    objectFit: 'cover',
  };

  const contentStyle = {
    color: '#fafbfd',
  };

  const titleStyle = {
    color: '#000000', // Color del título en negro
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '10px 0',
  };
  const tittle = {
    color: '#000000', // Color del título en negro
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '10px 0',
    textAlign: 'center',
  };

  // console.log('Idioma actual:', i18n.language);
  // console.log('Traducción de "conocenos1":', i18next.t('conocenos1'));

  return (
    <div>
      <Card sx={cardStyle}>
        {/* <div className='buttonContainer'>
          <button className="btnEspanol" onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button className="btnIngles" onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div> */}
        <Typography variant="h2" component="div" sx={tittle}>
          {i18next.t('conocenos1')}
        </Typography>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/img/2.jpg"
            alt="Imagen 1"
            sx={mediaStyle}
          />
          <CardContent sx={contentStyle}>
            <Typography variant="h3" component="div" sx={titleStyle}>
              {i18next.t('vision')}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {i18next.t('visionTexto')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/img/1.jpg"
            alt="Imagen 2"
            sx={mediaStyle}
          />
          <CardContent sx={contentStyle}>
            <Typography variant="h4" component="div" sx={titleStyle}>
              {i18next.t('mision')}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {i18next.t('misionTexto')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/img/3.jpg"
            alt="Imagen 2"
            sx={mediaStyle}
          />
          <CardContent sx={contentStyle}>
            <Typography variant="h4" component="div" sx={titleStyle}>
              {i18next.t('valores')}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <li>{i18next.t('valoresTexto1')}</li>
              <li>{i18next.t('valoresTexto2')}</li>
              <li>{i18next.t('valoresTexto3')}</li>
              <li>{i18next.t('valoresTexto4')}</li>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
export default Texto;