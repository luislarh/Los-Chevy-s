import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Texto() {
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

  return (
    <div>
      <Card sx={cardStyle}>
      <Typography variant="h2" component="div" sx={tittle}>
              ¡Conocenos!
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
              Visión
            </Typography>
            <Typography variant="body3" color="text.secondary">
            Ser reconocidos como el referente de excelencia en la creación y distribución de productos de maíz en Acámbaro, Guanajuato, y más allá. Nuestra visión es convertirnos en una empresa líder que celebre la riqueza y diversidad de la cultura del maíz a través de la innovación constante y la satisfacción de nuestros clientes.            </Typography>
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
              Misión
            </Typography>
            <Typography variant="body3" color="text.secondary">
            Nuestra misión es ofrecer a nuestros clientes productos de maíz de la más alta calidad, elaborados de manera tradicional con un toque de innovación. Nos esforzamos por promover el orgullo y la herencia cultural del maíz en Acámbaro, Guanajuato, a través de la creación de tostadas, totopos, tacos para rellenar y otros productos deliciosos. Trabajamos en estrecha colaboración con agricultores locales, respetando nuestras raíces, y priorizamos la calidad, la sostenibilidad y la satisfacción del cliente en todo momento.            </Typography>
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
              Valores
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <li>            Pasión por el maíz: El maíz es el corazón de nuestro negocio, y lo tratamos con cuidado y respeto en cada producto que elaboramos.
              </li>
              <li>            Calidad intransigente: Nos comprometemos a ofrecer la más alta calidad en nuestros productos, sin compromisos en ningún aspecto de nuestro negocio.
              </li>
            <li>
            Innovación constante: Abrazamos la innovación para mantenernos frescos y emocionantes para nuestros clientes, siempre buscando sorprender y deleitar.
            </li>
            <li>
            Conexión con la comunidad local: Estamos arraigados en Acámbaro, valoramos nuestras relaciones con agricultores y la comunidad local, y fomentamos la colaboración y el apoyo mutuo en nuestra región.
            </li>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
export default Texto;